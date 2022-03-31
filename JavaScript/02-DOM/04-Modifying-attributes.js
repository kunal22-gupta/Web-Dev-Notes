// Now we will learn how can we select our element attributes and modify them accordingly

// To check what attributes are present in your selected element we use .attributes
document.querySelector("input").attributes; // this prints list of all attributes in input tag

// To select a particular attribute 
document.querySelector("input").getAttribute("type"); // this will get the value of type attribute in input tag

// To modify the value of an attribute 
document.querySelector("input").setAttribute("type", "checkbox"); // this changes the value of first input from radio to checkbox