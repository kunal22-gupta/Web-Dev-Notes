// Previously we learned how to select our html elements in javascript.
// Adding style is really easy now. We can add style to our selected element like - 

document.querySelector("#heading").style.color = "Brown";

// All the css properties you learned in css is same in javascript. Only difference is, we have to name them in camel case rather than using a hypen(-). eg:
// In CSS:                In JavaScript:
// background-color       backgroundColor
// border-radius          borderRadius
// font-size              fontSize
// font-align             fontAlign 

document.querySelector("#red").style.backgroundColor = "red";
document.querySelector("#blue").style.color = "blue";
document.querySelector("#yellow").style.color = "yellow";
document.querySelector("#green").style.color = "green";
document.querySelector("#orange").style.color = "orange";
document.querySelector("#brown").style.color = "brown";
document.querySelector("body").style.marginLeft = "50px";
document.querySelector("body").style.marginRight = "50px";

// Though you can change the style of the elements like mentioned above, but we should keep in mind seperation of concerns i.e. it is always good practice to seperate your styling in a css file and only add functionality in your javascript file.

document.querySelector("body").classList; //this will print the list of classes added to your selected element in the console.

//If you want to do something like document.querySelector("body").style.backgroundColor = "pink"; you can do so like -
document.querySelector("body").classList.add("pink"); //this will add a new class with the name "pink" to the selected element. You can add a pink class in your css and add the properties you want to have in the pink class. (check style.css - line11)

document.querySelector("body").classList.remove("pink"); //you can also remove a class like this

document.querySelector("body").classList.toggle("pink") //this will add the class if not present and if the class is already present it will remove it.

/* CONCLUSION */
// Keep your styles in a seperate style sheet and modify it like the above method