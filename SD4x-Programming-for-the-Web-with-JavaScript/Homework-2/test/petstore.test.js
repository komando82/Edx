var assert = require('assert');
var petstore = require('../petstore.js');

describe('calculateFoodOrder', ()=> {
  	it('calculateFoodOrder should calculate amount of food to order when inputs are positive numbers', () => {
    	var test = petstore._test.calculateFoodOrder(10,  3);
    	var expected = 30;
    	assert(test === expected);
  	});
  	it('calculateFoodOrder should return -1 when numAnimals < 0', () => {
    	var test = petstore._test.calculateFoodOrder(-1,  1);
    	var expected = -1;
    	assert(test === expected);
  	});
  	it('calculateFoodOrder should return -1 when numAnimals is non-numeric', () => {
    	var test = petstore._test.calculateFoodOrder('dog',  1);
    	var expected = -1;
    	assert(test === expected);
  	});
  	it('calculateFoodOrder should return -1 when avgFood < 0', () => {
    	var test = petstore._test.calculateFoodOrder(1,  -1);
    	var expected = -1;
    	assert(test === expected);
  	});
  	it('calculateFoodOrder should return -1 when avgFood is non-numeric', () => {
    	var test = petstore._test.calculateFoodOrder(1,  'dog');
    	var expected = -1;
    	assert(test === expected);
  	});
});

describe('mostPopularDays', ()=> {
  	it('mostPopularDays should return day with maximal traffic when one day has most traffic', () => {
    	var day1 = new petstore._test.Weekday("Sunday", 100);
    	var day2 = new petstore._test.Weekday("Monday", 200);
    	var day4 = new petstore._test.Weekday("Wednesday", 300);
    	var day3 = new petstore._test.Weekday("Tuesday", 150);
    	var week = [day1, day2, day3, day4];
    	var expected = "Wednesday";
    	var test = petstore._test.mostPopularDays(week);
    	assert(test === expected);
  	});
  	it('mostPopularDays should return an array of days when more than one day has most popular traffic', () => {
      	var day1 = new petstore._test.Weekday("Sunday", 100);
      	var day2 = new petstore._test.Weekday("Monday", 300);
      	var day4 = new petstore._test.Weekday("Wednesday", 300);
      	var day3 = new petstore._test.Weekday("Tuesday", 150);
      	var week = [day1, day2, day3, day4];
      	var test = petstore._test.mostPopularDays(week);
      	assert(test.length == 2);
      	assert(test.indexOf("Monday") != -1);
      	assert(test.indexOf("Wednesday") != -1);
      	//assert(test.indexOf("Sunday") == -1);
      	//assert(test.indexOf("Tuesday") == -1);
    });
  	it('mostPopularDays should return null when input array is empty', () => {
      	var week = [];
      	var test = petstore._test.mostPopularDays(week);
      	assert(test === null);
    });
  	it('mostPopularDays should return null when input array is null', () => {
      	var test = petstore._test.mostPopularDays(null);
      	assert(test === null);
    });
});

describe('createAnimalObjects', () => {
  	it('createAnimalObjects should return an array of one animal object when each array has one value',  () => {
    	var animal1 = new petstore._test.Animal("Lola", "Dog", "Golden Retriever");
    	var test = petstore._test.createAnimalObjects(["Lola"], ["Dog"], ["Golden Retriever"]);
    	assert(test[0].name === animal1.name);
    	assert(test[0].type === animal1.type);
    	assert(test[0].breed === animal1.breed);
  	});
  	it('createAnimalObjects should return an array of two animal objects when each array has two values',  () => {
    	var animal1 = new petstore._test.Animal("Lola", "Dog", "Golden Retriever");
    	var animal2 = new petstore._test.Animal("Sprinkles", "Dog", "Pitbull");
    	var test = petstore._test.createAnimalObjects(["Lola", "Sprinkles"], ["Dog", "Dog"], ["Golden Retriever", "Pitbull"]);
    	assert(test[0].name === animal1.name);
    	assert(test[0].type === animal1.type);
    	assert(test[0].breed === animal1.breed);
    	assert(test[1].name === animal2.name);
    	assert(test[1].type === animal2.type);
    	assert(test[1].breed === animal2.breed);
  	});
  	it('createAnimalObjects should return an empty array when input array lengths are unequal',  () => {
    	var animal1 = new petstore._test.Animal("Lola", "Dog", "Golden Retriever");
    	var test = petstore._test.createAnimalObjects(["Lola"], ["Dog", "Dog"], ["Golden Retriever"]);
    	assert(test.length === 0);
  	});
  	it('createAnimalObjects should return an empty array when input array lengths are 0',  () => {
    	var test = petstore._test.createAnimalObjects([], [], []);
    	assert(test.length === 0);
  	});
  	it('createAnimalObjects should return an empty array when first input is null',  () => {
    	var test = petstore._test.createAnimalObjects(null, ["Dog"], ["Beagle"]);
    	assert(test.length === 0);
  	});
  	it('createAnimalObjects should return an empty array when second input is null',  () => {
    	var test = petstore._test.createAnimalObjects(["Snoopy"], null, ["Beagle"]);
    	assert(test.length === 0);
  	});
  	it('createAnimalObjects should return an empty array when third input is null',  () => {
    	var test = petstore._test.createAnimalObjects(["Snoopy"], ["Dog"], null);
    	assert(test.length === 0);
  	});
})
