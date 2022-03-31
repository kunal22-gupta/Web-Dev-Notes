// We can navigate in the dom like this. But through this we can select the middle child element of a parent element.
document.firstElementChild.lastElementChild.firstElementChild.innerHTML = "Kunal Gupta Notes";

// Selecting Html elements
var title = document.getElementById("heading"); // selects for element with the same id

var subHead = document.getElementsByClassName("sub-heading"); // searches for elements with same class. There can be multiply elements with same class name. Therefore, it returns an array of elements with same class name. You can access the array like - document.getElementsByClassName("sub-heading")[x] -> x belongs to the index you want to access to.

var listItems = document.getElementsByTagName("li"); // searches for the elements with provided tag name. This also returns an array.

var understood = document.getElementsByName("understood"); // searches for elements who have a name attribute and which contains the value provided in the parenthesis;

// Below one is the easiest. It is same as how you select elements in css. you just have to add the path inside the querySelector(). It will select the first li inside of ul.
var firstListItem = document.querySelector("ul li");
// If you want to select all the lists inside of ul then you can use querySelectorAll(). This will return you an array of all the li inside of ul.
var allListItems = document.querySelectorAll("ul li");
// more eg:
// document.querySelector("#name");
// document.querySelector("ul li #blue");
// document.querySelector(".colors");


/* REMEMBER */
// You have to give the path or name inside double quotes in every selectors.
