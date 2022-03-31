// Loops helps us to repetedly execute some lines of code until the condition is terminated

// while loops
var num = 1;
while(num <= 10){
	console.log(num)
	num++; //updating the value of num. If the condition is not updated then the loop will run till infinite.
}

// for loops (initialization; condition; update)
for(var a = 1; a <= 10; a++){
	console.log(a);
}

// do while loops 
// The do...while loop statement creates a loop that executes a block until a condition evaluates to false
// Remember, in do while the loop will be executed atleast once as it checks the condition after execution. Whereas, in while and for loop first the condition is checked.
var c = 1;
do {
  console.log(c + " output printed");
	c++
} while (c<2);


// INFINITE loops
// while (num <= 10) {
//   console.log(num);
// }
// for (var a = 1; a <= 10; a-- {
//   console.log(a);
// }