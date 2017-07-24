// Objects - collections of name/value pairs

// Dog Object
var dog = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    weight: 60,
    bark: function() {
        console.log("Woof!");
    }
};

console.log(dog);
console.log(dog.name);
console.log(dog.breed);
console.log(dog.weight);
console.log(dog["breed"]);
dog.bark(); 
