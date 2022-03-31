// 1. Arithematic operators
var add = 12 + 3;
var sub = 12 - 3;
var multiply = 12 * 3;
var divide = 12 / 3;
var modulo = 12 % 7;

// 2. Unary operators
add++; //Increment
sub--;//Decrement

// 3. Assignment operator
var c;
c=3; // = is a assignment operator
add += 3; //add = add + 3;
sub -= 4; //sub = sub - 4;
multiply *= 2; //multiply = multiply * 2;
divide /= 2; //divide = divide / 2;
modulo %= 2; // modulo = modulo % 2;

// 4. Relational operator (Use MDN reference for more understanding)

var check = 3 < 4; //true 
var check2 = 4 <= 4; //true
var check3 = 3 > 4; //false
var check4 = 3 >= 3; //true
var check5 = 3 == 3; //true
var check6 = 3 === "3"; //false; strict equals-to also checks for the data type.

// 5. Ternary Operator
var age = 23;
var isEligible = (age >= 18)? "eligigble":"not eligible";
console.log(isEligible);

// 6. Logical operator
//Logical AND(&&)
var check7 = 3 < 4 && 6 < 9; //true; gives true when both side of the conditions are true 
//Logical OR(||)
var check7 = 3 < 4 || 9 < 6; //true; gives true when either one side of the condition is true
//Logical NOT(!)
var check7 = !(3 < 4) ; //false; gives flase when condition is true and vice versa.


//For more check out : https://www.w3schools.com/js/js_operators.asp
