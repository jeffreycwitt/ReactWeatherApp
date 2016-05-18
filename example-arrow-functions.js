//var names = ['Jeff', 'Becky', 'Bob'];

// names.forEach(function(name){
// 	console.log("For Each", name);
// });

// names.forEach((name) => {
// 	console.log("ArrowFunc", name)
// });

// names.forEach((name) => console.log(name));

//var returnMe = (name) => name + "!";
//console.log(returnMe("Jeff"));

// var person = {
// 	name: "Jeff",
// 	greet: function(){
// 		names.forEach((name) => {
// 			console.log(this.name + " says hi to " + name)
// 		});
// 	}
// };

// person.greet();

//challenge area

function add (a, b){
	return a + b;
}

var addStatement = (a, b) => {
	return a + b
}  

var addExpression = (a, b) => a + b;

console.log(add(1,3));
console.log(addStatement(9,1));
console.log(addExpression(2,3));
