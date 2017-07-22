// Each of the following options will create a new empty object :) 

var newObject = {}; 

var newObject = Object.create(null); // or 

var newObject = new Object(); 

// the 'Object' constructor creates an object wrapper for a specific value, or where no value is passed, it will create an empty object and return it

// Dot Syntax 

newObject.someKey = 'hello aeon'; // write properties 
var key = newObject.someKey; // Access properties 

// Square bracket syntax 

newObject['someKey'] = 'Hello, Aeon'; // write properties 
var key = newObject['someKey']; // Access properties 


// ECMA 5 only compatible approaches 

Object.defineProperty(newObject, "someKey"), { 
	value: "for more control of the property's behaviour", 
	writeable: true, 
	enumerable: true, 
	configurable: true
}); 


// Here's another form (shorthand) to directory above

var defineProp = function ( obj, key, value ){ 
	config.value = value; 
	Object.defineProperty(obj, key, config); 
}; 


// Create a new empty object 

var man = Object.create(null); 

// Populate the object with properties 

defineProp( man, 'car', 'hodie' ); 

defineProp( man, 'dob', '1982' ); 

defineProp( man, 'beard', false ); 


// Object.defineProperties

Object.defineProperties(newObject, { 
	"someKey": {
		value: "Hello, Aeon", 
		writeable: true
	}, 
	"anotherKey": {
		value: "Foo Bar", 
		writeable: false
	} 
}); 


// Can also be used for inheritance 

var driver = Object.create(man); 
defineProp(driver, 'topSpeed', '100mph'); 
driver.topSpeed // 100 mph
