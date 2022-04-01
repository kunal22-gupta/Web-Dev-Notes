// Higher order function are functions that can take functions as parameters. We will understand this better through a calculator function.

// First, we will create functions for operations of our calculator.
function add(n1, n2){
	return n1 + n2;
}
function sub(n1, n2) {
  return n1 - n2;
}
function mulitply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  return n1 / n2;
}
function modulo(n1, n2) {
  return n1 % n2;
}

// Now, we will create a function calculator which will take a function as a parameter. Here whatever function will be provided when calling the calc function will be called inside of the calc function.
function calc(n1, n2, operation){ //when taking function as parameter we dont use ().
	return operation(n1, n2);
}

// We will call the function calc and give add function to it to add our numbers.
var ans = calc(4, 5, add);// when passing function we dont use ().
console.log("sum = " + ans);
// Here we have called the calc function and provided a function add() to add the 2 numbers. In the calc function whatever function it will receive will be called inside it and the value will be returned.

// more eg:
ans = calc(4, 5, sub);
console.log("difference = " + ans);
ans = calc(4, 5, mulitply);
console.log("product = " + ans);
ans = calc(4, 5, divide);
console.log("division = " + ans);
ans = calc(4, 5, modulo);
console.log("remainder = " + ans);
