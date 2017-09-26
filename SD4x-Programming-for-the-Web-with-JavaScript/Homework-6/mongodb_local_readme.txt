#Homework-6
node index.js

#MongoDB
Program Files\MongoDB\Server\3.4\bin  => mongod --port 9999
Program Files\MongoDB\Server\3.4\bin  => mongo --port 9999

use myDatabase

db.animals.insertMany([
{ "name" : "Cooper", "species" : "Dog", "breed" : "Catahoula Leopard", "gender" : "male", "age" : 11, "traits" : [  "crazy",  "friendly" ] },
{ "name" : "Garfield", "species" : "Cat", "breed" : "Tabby", "gender" : "male", "age" : 50, "traits" : [  "fat",  "hungry" ] },
{ "name" : "Snoopy", "species" : "Dog", "breed" : "Beagle", "gender" : "male", "age" : 70, "traits" : [  "loyal",  "friendly" ] },
{ "name" : "Lola", "species" : "Dog", "breed" : "Beagle", "gender" : "female", "age" : 5, "traits" : [  "loyal",  "friendly" ] }
]);

db.toys.insertMany([
{ "id" : "1234", "name" : "dog chew toy", "price" : 10.99, "inStock" : 10, "availableColors" : [ ] },
{ "id" : "5678", "name" : "dog pillow", "price" : 25.99, "inStock" : 10, 
 "availableColors" : [ ] }
]);

db.animals.remove({})
db.toys.remove({})

