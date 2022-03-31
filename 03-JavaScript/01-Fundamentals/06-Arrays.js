// Arrays are a group of values with same datatype

var fruit = ["mango", "apple", "banana", "grapes"];
// indexes:    0				1		  		2         3

// You can also create an array like -
var veggies = new Array("Tomato", "Capsicum", "Onion", "Potato");
// or can just provide the length of array to create
var primeNos = new Array(10);
// to initialize any element in an array
primeNos[0] = 2;
//printing any element
console.log(primeNos[0]);
 
// to access any element of an array -
var first = fruit[0]; //"mango"
var second = fruit[2]; //"banana"

// we can also find the length of the array which is how many elements does it contains.
var length = fruit.length; //4

// we can also check if any value in present in the array or not by using the includes() function
var isPresent = fruit.includes("Tomato"); //false 

// function if you want ot add a value in the end is push() and to delete a value from end is pop()
primeNos.push(5); // [2, 5]
primeNos.push(7); // [2, 5, 7]
primeNos.pop(); // [2, 5] ; it deletes 7

// You can print an array like - 
console.log(primeNos);


// To learn more about array functions go to : https://www.w3schools.com/js/js_array_methods.asp