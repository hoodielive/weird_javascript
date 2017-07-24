// functions are put into memory first
function print() {
    console.log('A working function!');
}

// Invoking functions
print();


// Getting in Arguments!
function parameters(a) {
    console.log(a);
}

parameters('An Argument!');

// Multiple Args

function arguments(a, b, c) {
    console.log(a + b + c);
}

print("One", "Two", "Three");


// You can make functions - variables

var afunc = function(a,b,c) {
    console.log(a + b + c);
}
afunc = ("One", "Two", "Three");


// Return Data
var multiply = function(a, b) {
    return a*b;
}

var product = multiply(5, 10);
console.log(product)
