function plucker(FIELD) {
	return function(obj) {
		return (obj && obj[FIELD]); 
	}; 
}

var best = {title: 'Infinite Jest', author: 'DFW'}; 
var getTitle = plucker('title'); 

