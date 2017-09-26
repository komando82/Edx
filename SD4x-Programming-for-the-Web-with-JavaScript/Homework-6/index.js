var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

function prepareDataFromUrlQuery (urlQueryIds, urlQueryQty) {

	var index;

	var idUniqueArr = [];
	var idsToQuery = [];

	var idQtyRelObj = {};
	var returnObj = {};

	for (var i = 0; i < urlQueryIds.length; i++) {

		if (urlQueryQty[i] < 1 || isNaN(urlQueryQty[i]) || urlQueryQty[i] === true) {
			continue;
		}

		index = idUniqueArr.indexOf(urlQueryIds[i]);

		if (index === -1) {
			idUniqueArr.push(urlQueryIds[i]);

			idsToQuery.push({id: urlQueryIds[i]});
			idQtyRelObj[urlQueryIds[i]] = parseInt(urlQueryQty[i]);
		}
		else {
			idQtyRelObj[urlQueryIds[i]] += parseInt(urlQueryQty[i]);
		}

	}

	returnObj.idQtyRelObj = idQtyRelObj;
	returnObj.idsToQuery = idsToQuery;

	return returnObj;

}

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
					names: animals.map(function (animal) {
						return animal.name;
					})
				});
			}
		});

	}

});

app.use('/calculatePrice', (req, res) => {

	var urlQueryIds = req.query.id;
	var urlQueryQty = req.query.qty;

	if (urlQueryIds.length !== urlQueryQty.length) {
		res.send({});
	}
	else {

		var dataPrepObj = prepareDataFromUrlQuery(urlQueryIds, urlQueryQty);

		var items = [];
		var qty;
		var totalPrice = 0;

		Toy.find({ $or: dataPrepObj.idsToQuery }, (err, toy) => {
			if (err) {
				res.send('Error: ' + err);
			}
			else if (toy.length === 0) {
				res.send({
					items: [],
					totalPrice: 0
				});
			}
			else {

				for (var i = 0; i < toy.length; i++) {

					qty = dataPrepObj.idQtyRelObj[toy[i].id];

					items.push({
						item: toy[i].id,
						qty: qty,
						subtotal: toy[i].price * qty
					});

					totalPrice += toy[i].price * qty;

				}

				res.send({
					items: items,
					totalPrice: totalPrice
				});
			}
		});

	}

});

app.use('/', (req, res) => {
	res.json({ msg: 'It works!' });
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});

// Please do not delete the following line; we need it for testing!
module.exports = app;
