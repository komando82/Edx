var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

app.use('/findToy', (req, res) => {
    
    var findToyById = req.query.id;
	
	if (findToyById === undefined) {
		res.send({});
	}
	else {
		Toy.findOne({ id: findToyById }, (err, toy) => {
			if (err) {
				res.send('Error: ' + err);
			}
			else if (!toy) {
				res.send({});
			}
			else {
				res.send(toy);
			}
		});
	}
    
});

app.use('/findAnimals', (req, res) => {
    
	var animalSpecies = req.query.species;
	var animalTrait = req.query.trait;
	var animalGender = req.query.gender;

	var queryObj = {};
	
	if (animalSpecies === undefined && animalTrait === undefined && animalGender === undefined) {
		res.send({});
	}
	else {

		if (animalSpecies !== undefined) {
			queryObj.species = animalSpecies;
		}
		if (animalTrait !== undefined) {
			queryObj.traits = animalTrait;
		}
		if (animalGender !== undefined) {
			queryObj.gender = animalGender;
		}

		Animal.find(queryObj, 'name species breed gender age -_id', (err, animals) => {
			if (err) {
				res.send('Error: ' + err);
			}
			else if (!animals) {
				res.send({});
			}
			else {
				res.send(animals);
			}
		});

	}
    
});

app.use('/animalsYoungerThan', (req, res) => {
    
	var animalAge = req.query.age;

	if (animalAge === undefined) {
		res.send({});
	}
	else {

		Animal.find({ age: { $lt: animalAge }}, 'name', (err, animals) => {
			if (err) {
				res.send('Error: ' + err);
			}
			else if (!animals) {
				res.send({});
			}
			else if (animals.length === 0) {
				res.send({count: 0});
			}
			else {
				res.send({
					count: animals.length,
					names: animals.map(function(animal) {
						return animal.name;
					})
				});
			}
		});

	}
    
});


app.use('/calculatePrice', (req, res) => {
	
	var toyId = req.query.id;
	var toyQty = req.query.qty;

	var ids = buildQueryIdObj(toyId, toyQty);

	var items = [];
	var totalPrice;
	var subTotal;

	Toy.find({ $or: ids }, (err, toy) => {
		if (toy.length === 0) {
			res.send({
				items: [],
				totalPrice :0
			});
		}
		else {
			var items = [];

			for (var i = 0; i < toy.length; i++) {
				items.push({
					item: toy[i].id,
					qty: 0,
					subtotal: 0
				});
			}

			res.send({
				items: items,
				totalPrice :0
			});
		}
	});


    
});

app.use('/', (req, res) => {
	res.json({ msg : 'It works!' });
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});

function buildQueryIdObj(toyIds, toyQtys) {
	var ids = [];

	for (var i = 0; i < toyIds.length; ++i) {
		if (toyQtys[i] >= 1 && !isNaN(toyQtys[i]) && toyQtys[i] !== true) {
			ids.push({
				id: toyIds[i]
			});
		}
	}
	
	return ids;
}

// Please do not delete the following line; we need it for testing!
module.exports = app;
