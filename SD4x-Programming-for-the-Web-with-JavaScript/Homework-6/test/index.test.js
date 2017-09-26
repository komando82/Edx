var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');

var expect = chai.expect;

chai.use(chaiHttp);

describe('findToy', () => {

	it('findToy should be able to find a Toy in the database using its id', (done) => {
		findToyById(done);
	    });

	it('findToy should return empty JSON when there is no Toy with specified id', (done) => {
		noToyWithSpecifiedId(done);
	    });

	it('findToy should return empty JSON when Toy id is not specified', (done) => {
		noToyIdSpecified(done);
	    });

    });



describe('findAnimal', () => {

	it('findAnimal should return empty JSON when no query parameters are specified', (done) => {
		noAnimalQuerySpecified(done);
	    });

	it('findAnimal should return empty JSON when no Animal matches any query parameters', (done) => {
		noAnimalMatchesAnyParameters(done);
	    });

	it('findAnimal should return empty JSON when Animal matches some but not all query parameters', (done) => {
		animalMatchesSomeParameters(done);
	    });

	it('findAnimal should correctly return Animals when only specifying species', (done) => {
		findAnimalsBySpecies(done);
	    });

	it('findAnimal should correctly return Animals when only specifying gender', (done) => {
		findAnimalsByGender(done);
	    });

	it('findAnimal should correctly return Animals when only specifying trait', (done) => {
		findAnimalsByTrait(done);
	    });

	it('findAnimal should correctly return Animals when specifying all query parameters', (done) => {
		findAnimalsByAllParameters(done);
	    });

    });

describe('animalsYoungerThan', () => {

	it('animalsYoungerThan should return empty JSON when no age specified', (done) => {
		noAgeSpecified(done);
	    });

	it('animalsYoungerThan should return correct result when there are no Animals younger than specified age', (done) => {
		noAnimalsYoungerThanSpecifiedAge(done);
	    });

	it('animalsYoungerThan should return empty JSON when specified age is non-numeric', (done) => {
		specifiedAgeIsNonNumeric(done);
	    });

	it('animalsYoungerThan should return correct output when one Animal is younger than specified age', (done) => {
		oneAnimalYoungerThanSpecifiedAge(done);
	    });

	it('animalsYoungerThan should return correct output when more than one Animal is younger than specified age', (done) => {
		oneAnimalYoungerThanSpecifiedAge(done);
	    });

	it('animalsYoungerThan should return correct output when Animal age is equal to but not less than specified age', (done) => {
		equalToButNotLessThanSpecifiedAge(done);
	    });

    });

describe('calculatePrice', () => {

	it('calculatePrice should return empty JSON when no query parameters are specified', (done) => {
		noItemSpecified(done);
	    });

	it('calculatePrice should return empty JSON when number of specified ids does not match number of specified quantities', (done) => {
		numberOfIdsAndQuantitiesDontMatch(done);
	    });

	it('calculatePrice should return correct result when no items match specified id', (done) => {
		noItemMatchesId(done);
	    });

	it('calculatePrice should return correct result when some specified ids match items but others do not', (done) => {
		someIdsDoNotMatchItems(done);
	    });

	it('calculatePrice should return correct result when some speficied quantities are negative', (done) => {
		someQuantitiesNegative(done);
	    });

	it('calculatePrice should return correct result when some speficied quantities are zero', (done) => {
		someQuantitiesZero(done);
	    });

	it('calculatePrice should return correct result when some speficied quantities are non-numeric', (done) => {
		someQuantitiesNonNumeric(done);
	    });

	it('calculatePrice should return correct result when one item is specified with quantity = 1', (done) => {
		oneItemQuantityOne(done);
	    });

	it('calculatePrice should return correct result when one item is specified with quantity > 1', (done) => {
		oneItemQuantityGreaterThanOne(done);
	    });

	it('calculatePrice should return correct result when one item is specified multiple times', (done) => {
		oneItemMultipleTimes(done);
	    });

	it('calculatePrice should return correct result when multiple items are specified with quantity = 1', (done) => {
		multipleItemsQuantityOne(done);
	    });

	it('calculatePrice should return correct result when multiple items are specified with quantity > 1', (done) => {
		multipleItemsQuantityGreaterThanOne(done);
	    });

    });




function multipleItemsQuantityGreaterThanOne(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=1234&qty[0]=2&id[1]=5678&qty[1]=3')
	.end( (err, res) => {
		var result = res.body;
		expect(result.totalPrice == 99.95, 'Incorrect value for totalPrice property').to.equal(true);
		expect(result.items.length == 2, 'Incorrect number of elements in items property').to.equal(true);
		if (result.items[0].item == '1234' && result.items[1].item == '5678') { } // ok!
		else if (result.items[0].item == '5678' && result.items[1].item == '1234') { } // ok!
		else expect(false, 'Incorrect items returned in items property').to.equal(true);

		for (var i = 0; i < result.items.length; i++) {
		    var item = result.items[i];
		    if (item.item == '1234') {
			expect(item.qty == '2', "Incorrect value for item's qty property").to.equal(true);
			expect(item.subtotal == '21.98', "Incorrect value for item's subtotal property").to.equal(true);
		    }
		    else if (item.item == '5678') {
			expect(item.qty == '3', "Incorrect value for item's qty property").to.equal(true);
			expect(item.subtotal == '77.97', "Incorrect value for item's subtotal property").to.equal(true);
		    }
		}
		done();
	    });
}

function multipleItemsQuantityOne(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=1234&qty[0]=1&id[1]=5678&qty[1]=1')
	.end( (err, res) => {
		var result = res.body;
		expect(result.totalPrice == 36.98, 'Incorrect value for totalPrice property').to.equal(true);
		expect(result.items.length == 2, 'Incorrect number of elements in items property').to.equal(true);
		if (result.items[0].item == '1234' && result.items[1].item == '5678') { } // ok!
		else if (result.items[0].item == '5678' && result.items[1].item == '1234') { } // ok!
		else expect(false, 'Incorrect items returned in items property').to.equal(true);

		for (var i = 0; i < result.items.length; i++) {
		    var item = result.items[i];
		    if (item.item == '1234') {
			expect(item.qty == '1', "Incorrect value for item's qty property").to.equal(true);
			expect(item.subtotal == '10.99', "Incorrect value for item's subtotal property").to.equal(true);
		    }
		    else if (item.item == '5678') {
			expect(item.qty == '1', "Incorrect value for item's qty property").to.equal(true);
			expect(item.subtotal == '25.99', "Incorrect value for item's subtotal property").to.equal(true);
		    }
		}
		done();
	    });
}


function oneItemQuantityGreaterThanOne(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=1234&qty[0]=3')
	.end( (err, res) => {
		var result = res.body;
		expect(result.totalPrice == 10.99 * 3, 'Incorrect value for totalPrice property').to.equal(true);
		expect(result.items.length == 1, 'Incorrect number of elements in items property').to.equal(true);
		var item = result.items[0];
		expect(item.item == '1234', "Incorrect value for item's item property").to.equal(true);
		expect(item.qty == '3', "Incorrect value for item's qty property").to.equal(true);
		expect(item.subtotal == '32.97', "Incorrect value for item's subtotal property").to.equal(true);

		done();
	    });
}

function oneItemMultipleTimes(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=1234&qty[0]=3&id[1]=1234&qty[1]=4')
	.end( (err, res) => {
		var result = res.body;
		expect(result.totalPrice == 10.99 * 7, 'Incorrect value for totalPrice property').to.equal(true);
		expect(result.items.length == 1, 'Incorrect number of elements in items property').to.equal(true);
		var item = result.items[0];
		expect(item.item == '1234', "Incorrect value for item's item property").to.equal(true);
		expect(item.qty == '7', "Incorrect value for item's qty property").to.equal(true);
		expect(item.subtotal == '76.93', "Incorrect value for item's subtotal property").to.equal(true);

		done();
	    });
}

function oneItemQuantityOne(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=1234&qty[0]=1')
	.end( (err, res) => {
		var result = res.body;
		expect(result.totalPrice == 10.99, 'Incorrect value for totalPrice property').to.equal(true);
		expect(result.items.length == 1, 'Incorrect number of elements in items property').to.equal(true);
		var item = result.items[0];
		expect(item.item == '1234', "Incorrect value for item's item property").to.equal(true);
		expect(item.qty == '1', "Incorrect value for item's qty property").to.equal(true);
		expect(item.subtotal == '10.99', "Incorrect value for item's subtotal property").to.equal(true);

		done();
	    });
}

function someQuantitiesZero(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=1234&qty[0]=1&id[1]=5678&qty[1]=0')
	.end( (err, res) => {
		var result = res.body;
		expect(result.totalPrice == 10.99, 'Incorrect value for totalPrice property').to.equal(true);
		expect(result.items.length == 1, 'Incorrect number of elements in items property').to.equal(true);
		var item = result.items[0];
		expect(item.item == '1234', "Incorrect value for item's item property").to.equal(true);
		expect(item.qty == '1', "Incorrect value for item's qty property").to.equal(true);
		expect(item.subtotal == '10.99', "Incorrect value for item's subtotal property").to.equal(true);

		done();
	    });
}

function someQuantitiesNonNumeric(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=1234&qty[0]=1&id[1]=5678&qty[1]=dog')
	.end( (err, res) => {
		var result = res.body;
		expect(result.totalPrice == 10.99, 'Incorrect value for totalPrice property').to.equal(true);
		expect(result.items.length == 1, 'Incorrect number of elements in items property').to.equal(true);
		var item = result.items[0];
		expect(item.item == '1234', "Incorrect value for item's item property").to.equal(true);
		expect(item.qty == '1', "Incorrect value for item's qty property").to.equal(true);
		expect(item.subtotal == '10.99', "Incorrect value for item's subtotal property").to.equal(true);

		done();
	    });
}

function someQuantitiesNegative(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=1234&qty[0]=1&id[1]=5678&qty[1]=-4')
	.end( (err, res) => {
		var result = res.body;
		expect(result.totalPrice == 10.99, 'Incorrect value for totalPrice property').to.equal(true);
		expect(result.items.length == 1, 'Incorrect number of elements in items property').to.equal(true);
		var item = result.items[0];
		expect(item.item == '1234', "Incorrect value for item's item property").to.equal(true);
		expect(item.qty == '1', "Incorrect value for item's qty property").to.equal(true);
		expect(item.subtotal == '10.99', "Incorrect value for item's subtotal property").to.equal(true);

		done();
	    });
}

function someIdsDoNotMatchItems(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=555&qty[0]=1&id[1]=1234&qty[1]=1')
	.end( (err, res) => {
		var result = res.body;
		expect(result.totalPrice == 10.99, 'Incorrect value for totalPrice property').to.equal(true);
		expect(result.items.length == 1, 'Incorrect number of elements in items property').to.equal(true);
		var item = result.items[0];
		expect(item.item == '1234', "Incorrect value for item's item property").to.equal(true);
		expect(item.qty == '1', "Incorrect value for item's qty property").to.equal(true);
		expect(item.subtotal == '10.99', "Incorrect value for item's subtotal property").to.equal(true);

		done();
	    });
}

function noItemSpecified(done) {
    chai.request(app)
	.get('/calculatePrice')
	.end( (err, res) => {
		var result = res.body;
		expect(result).to.be.empty;
		done();
	    });
}

function numberOfIdsAndQuantitiesDontMatch(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=1234&qty[0]=1&id[1]=5678')
	.end( (err, res) => {
		var result = res.body;
		expect(result).to.be.empty;
		done();
	    });
}

function noItemMatchesId(done) {
    chai.request(app)
	.get('/calculatePrice?id[0]=5555&qty[0]=1')
	.end( (err, res) => {
		var result = res.body;
		expect(result.items, 'items property should be an empty array').to.be.empty;
		expect(result.totalPrice == 0, 'totalPrice should be 0').to.equal(true);
		done();
	    });
}




function equalToButNotLessThanSpecifiedAge(done) {
    chai.request(app)
	.get('/animalsYoungerThan?age=11')
	.end( (err, res) => {
		var result = res.body;
		expect(result.count == 1, 'Incorrect value for count property').to.equal(true);
		expect(result.names.length == 1, 'Incorrect number of values in names property').to.equal(true);
		expect(result.names[0] == 'Lola', 'Incorrect value in names property').to.equal(true);
		done();
	    });
}

function moreThanOneAnimalYoungerThanSpecifiedAge(done) {
    chai.request(app)
	.get('/animalsYoungerThan?age=15')
	.end( (err, res) => {
		var result = res.body;
		expect(result.count == 2, 'Incorrect value for count property').to.equal(true);
		expect(result.names.length == 2, 'Incorrect number of values in names property').to.equal(true);
		if (names[0] == 'Lola' && names[1] == 'Cooper') { } // okay!
		else if (names[0] == 'Cooper' && names[1] == 'Lola') { } // okay!
		else expect(false, 'Incorrect value in names property').to.equal(true);		 
		done();
	    });
}

function oneAnimalYoungerThanSpecifiedAge(done) {
    chai.request(app)
	.get('/animalsYoungerThan?age=8')
	.end( (err, res) => {
		var result = res.body;
		expect(result.count == 1, 'Incorrect value for count property').to.equal(true);
		expect(result.names.length == 1, 'Incorrect number of values in names property').to.equal(true);
		expect(result.names[0] == 'Lola', 'Incorrect value in names property').to.equal(true);
		done();
	    });
}



function specifiedAgeIsNonNumeric(done) {
    chai.request(app)
	.get('/animalsYoungerThan?age=dog')
	.end( (err, res) => {
		var result = res.body;
		expect(result).to.be.empty;
		done();
	    });
}

function noAnimalsYoungerThanSpecifiedAge(done) {
    chai.request(app)
	.get('/animalsYoungerThan?age=1')
	.end( (err, res) => {
		var result = res.body;
		expect(result.count == 0, 'Incorrect value for count property').to.equal(true);
		expect(result.names, 'There should not be a names property').to.be.undefined;
		done();
	    });
}


function noAgeSpecified(done) {
    chai.request(app)
	.get('/animalsYoungerThan')
	.end( (err, res) => {
		var result = res.body;
		expect(result).to.be.empty;
		done();
	    });
}




function findAnimalsByAllParameters(done) {
    chai.request(app)
	.get('/findAnimals?species=Dog&gender=male&trait=friendly')
	.end( (err, res) => {
		var animals = res.body;
		expect(animals.length == 2, 'Number of Animals returned by query is incorrect').to.equal(true);
		if (animals[0].name == 'Cooper' && animals[1].name == 'Snoopy') { } // ok!
		else if (animals[0].name == 'Snoopy' && animals[1].name == 'Cooper') { } // ok!
		else expect(false, 'Incorrect Animal returned by query').to.equal(true);

		for (var i = 0; i < animals.length; i++) {
		    var animal = animals[i];
		    if (animal.name == 'Cooper')
			checkIfCooper(animal);
		    else if (animal.name == 'Snoopy')
			checkIfSnoopy(animal);
		}

		done();
	    });
}

function findAnimalsByTrait(done) {
    chai.request(app)
	.get('/findAnimals?trait=loyal')
	.end( (err, res) => {
		var animals = res.body;
		expect(animals.length == 2, 'Number of Animals returned by query is incorrect').to.equal(true);

		if (animals[0].name == 'Lola' && animals[1].name == 'Snoopy') { } // ok!
		else if (animals[0].name == 'Snoopy' && animals[1].name == 'Lola') { } // ok!
		else expect(false, 'Incorrect Animal returned by query').to.equal(true);

		for (var i = 0; i < animals.length; i++) {
		    var animal = animals[i];
		    if (animal.name == 'Lola')
			checkIfLola(animal);
		    else if (animal.name == 'Snoopy')
			checkIfSnoopy(animal);
		}

		done();
	    });
}

function checkIfLola(lola) {
    expect(Object.keys(lola).length == 5, 'Animal object should have five properties').to.equal(true);
    expect(lola.name == 'Lola', 'Animal name is not set correctly').to.equal(true);
    expect(lola.species == 'Dog', 'Animal species is not set correctly').to.equal(true);
    expect(lola.breed == 'Beagle', 'Animal breed is not set correctly').to.equal(true);
    expect(lola.gender == 'female', 'Animal gender is not set correctly').to.equal(true);
    expect(lola.age == 5, 'Animal age is not set correctly').to.equal(true);
}

function checkIfSnoopy(snoopy) {
    expect(Object.keys(snoopy).length == 5, 'Animal object should have five properties').to.equal(true);
    expect(snoopy.name == 'Snoopy', 'Animal name is not set correctly').to.equal(true);
    expect(snoopy.species == 'Dog', 'Animal species is not set correctly').to.equal(true);
    expect(snoopy.breed == 'Beagle', 'Animal breed is not set correctly').to.equal(true);
    expect(snoopy.gender == 'male', 'Animal gender is not set correctly').to.equal(true);
    expect(snoopy.age == 70, 'Animal age is not set correctly').to.equal(true);
}

function checkIfCooper(cooper) {
    expect(Object.keys(cooper).length == 5, 'Animal object should have five properties').to.equal(true);
    expect(cooper.name == 'Cooper', 'Animal name is not set correctly').to.equal(true);
    expect(cooper.species == 'Dog', 'Animal species is not set correctly').to.equal(true);
    expect(cooper.breed == 'Catahoula Leopard', 'Animal breed is not set correctly').to.equal(true);
    expect(cooper.gender == 'male', 'Animal gender is not set correctly').to.equal(true);
    expect(cooper.age == 11, 'Animal age is not set correctly').to.equal(true);
}

function findAnimalsByGender(done) {
    chai.request(app)
	.get('/findAnimals?gender=female')
	.end( (err, res) => {
		var animals = res.body;
		expect(animals.length == 1, 'Number of Animals returned by query is incorrect').to.equal(true);
		var lola = animals[0];
		checkIfLola(lola);
		done();
	    });
}

function findAnimalsBySpecies(done) {
    chai.request(app)
	.get('/findAnimals?species=Cat')
	.end( (err, res) => {
		var animals = res.body;
		expect(animals.length == 1, 'Number of Animals returned by query is incorrect').to.equal(true);
		var cat = animals[0];
		expect(Object.keys(cat).length == 5, 'Animal object should have five properties').to.equal(true);
		expect(cat.name == 'Garfield', 'Animal name is not set correctly').to.equal(true);
		expect(cat.species == 'Cat', 'Animal species is not set correctly').to.equal(true);
		expect(cat.breed == 'Tabby', 'Animal breed is not set correctly').to.equal(true);
		expect(cat.gender == 'male', 'Animal gender is not set correctly').to.equal(true);
		expect(cat.age == 50, 'Animal age is not set correctly').to.equal(true);
		done();
	    });
}

function animalMatchesSomeParameters(done) {
    chai.request(app)
	.get('/findAnimals?species=Dog&trait=grumpy')
	.end( (err, res) => {
		var animals = res.body;
		expect(animals).to.be.empty;
		done();
	    });
}

function noAnimalMatchesAnyParameters(done) {
    chai.request(app)
	.get('/findAnimals?species=Monkey&trait=hilarious')
	.end( (err, res) => {
		var animals = res.body;
		expect(animals).to.be.empty;
		done();
	    });
}

function noAnimalQuerySpecified(done) {
    chai.request(app)
	.get('/findAnimals')
	.end( (err, res) => {
		var animals = res.body;
		expect(animals).to.be.empty;
		done();
	    });
}


function findToyById(done) {
    chai.request(app)
	.get('/findToy?id=1234')
	.end( (err, res) => {
		var toy = res.body;
		expect(toy.id == '1234', 'Toy id is not set correctly').to.equal(true);
		expect(toy.name == 'dog chew toy', 'Toy name is not set correctly').to.equal(true);
		expect(toy.price == 10.99, 'Toy price is not set correctly').to.equal(true);
		done();
	    });
}

function noToyWithSpecifiedId(done) {
    chai.request(app)
	.get('/findToy?id=888')
	.end( (err, res) => {
		var toy = res.body;
		expect(toy).to.be.empty;
		done();
	    });
}

function noToyIdSpecified(done) {
    chai.request(app)
	.get('/findToy')
	.end( (err, res) => {
		var toy = res.body;
		expect(toy).to.be.empty;
		done();
	    });
}

