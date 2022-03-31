var name = "Kunal";
// Here each character in the string has a index value which starts from 0 like
// "K u n a l"
//  0 1 2 3 4

// Concatination of Strings
console.log("Hello" + " World!");

// find length of a string
var length = name.length;
console.log("Length of " + name + " is " + length);

// slicing a string
var firstThree = name.slice(0, 3); //here the first value is inclusive and second value is exclusive
console.log("First three letters of " + name + " is " + firstThree); 

// All upper case
var upper = name.toUpperCase();
console.log(upper);

// All lower caase
var lower = name.toLowerCase();
console.log(lower);