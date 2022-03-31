// functions are a set of statements that performs a task or calculates a value.

// 1. Below is a function that prints the steps to make a cup of coffee
function makeCoffee(){
	console.log("1. Boil 1 cup milk");
	console.log("2. Add your instant coffee in a cup");
	console.log("3. Add sugar accordinngly");
	console.log("4. Add your milk into the cup");
	console.log("5. Stir for a minute then enjoy.");
}

// We can now call this fuction as many times as we like.
// This is how you call a function.
makeCoffee();

// 2. We can also have parameter inside a function.
function greeting(name){
	console.log("Hello! " + name + ". Have a good day.");
}
// You can also have multiple parameters
// To call the above funtion
greeting("Kunal");
greeting("Ayush");

// 3. A function can also return some value
function areaSquare(side){
	return side*side;
}
// We can store the value in a variable
var area1 = areaSquare(5);
var area2 = areaSquare(7);
console.log("Area of first square " + area1);
console.log("Area of second square" + area2);

// Javascript has some in-built functions we can use. They are used in the browser. Like-
alert("This function shows a pop up message");
prompt("This functions takes a input from the user through a popup message");

// We have some math functions to perform mathematical operations (Use the MDN reference to learn more)
var sqrt = Math.sqrt(49); // 7
var pow = Math.pow(5, 3);// 5 raise to the power of 3 = 125
var randomNumber = Math.random(); // generates a random number between 0 and 1
var roundOff = Math.round(57.3); // 57;  rounds off to the nearest integer value
var floor = Math.floor(46.8); // 46; returns the largest integer less than or equal to a given number.
var ceil = Math.ceil(23.2); // 24; returns the smallest integer greater than or equal to a given number.


