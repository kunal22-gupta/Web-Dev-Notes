// Event listener help to add functionality into our program. It's syntax is addEventListener(type, listener);
// type refers to the event type. And listener is a function that will execute when a event is occured.

//Here we are trying to add an event that if we cllck on any of the box it should give an alert saying "You clicked on it".
document.querySelectorAll(".drum")[0].addEventListener("click", popUp); //on clicking the first drum we get a pop up saying you clicked me.
function popUp(){
	alert("You clicked me");
}
// Rememeber, we dont use () when adding function in our event listener like we did in popUp

// We can also add a anonymous function(fucntion without any name) like
document.querySelectorAll(".drum")[1].addEventListener("click", function (){ alert("You clicked me");}); 

// We can add event listener into the rest of our drums using loops.
for(var i = 2; i < document.querySelectorAll(".drum").length; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", popUp);
}