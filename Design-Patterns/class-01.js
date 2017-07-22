// A car 'class' 

function Car(model) {
	this.model = model; 
	this.color = 'silver'; 
	this.year = '2017'; 
	this.getInfo = function() {
		return this.model + ' ' + this.year; 
	} 

} 

var myCar = new Car('ford'); 
myCar.year = '2014'; 
console.log(myCar.getInfo()); 

