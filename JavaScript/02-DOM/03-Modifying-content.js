// To change the inner html of an element we use .innerHTML 
document.querySelector("h1").innerHTML; //this prints whatever is inside of the selected element.
document.querySelector("h1").innerHTML = "Kunal Gupta"; //this modifies it

// To change content in an element we make use of .textContent
document.querySelector("h1").textContent; //shows whatever content is inside of the selected element
document.querySelector("h1").textContent = "Gupta Kunal"; //this modifies it

// Here you might think that these both are doing the same thing. But, it is not true. let's take one more example of innerHTML
document.querySelector("h2").innerHTML = "<i> Learning DOM (Document Object Model) </i>";
//now here we can see that .innerHTML is adding a code inside of the selected element whereas, textContent only modifies the text value inside of the selected element.

/* CONCLUSION */
// .innerHTML modifies the code inside the selected element
// .textContent modifies the content inside the selected eleement