// This is a program to pick a random person from the array to pay the bill.

var people  = ["Kunal", "Ayush", "Harsh", "Amit", "Mayank"];
var length = people.length;
var pick = Math.floor(Math.random() * length);
console.log(people[pick] + " will have to pay the bill.");