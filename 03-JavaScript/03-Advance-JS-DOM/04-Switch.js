function playSound(alpha){

  //now we will use switch statement to play different sound at different alphabet

  // Whatever expression is there in switch(expression), it will execute the case with the same expression and if no case has that expression it will execute the default section.

  switch (alpha) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break; // break is added to terminate switch at this point. So that after this the next case is not executed.

    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;

    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;

    case "j":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case "k":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;

    case "l":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    default:
      alert(alpha);
  }
}


// Now we will try to play different sounds when we click on different boxes in our Drum Kit or press a key on our keyboard.


var drums = document.querySelectorAll(".drum"); // Here we get an array which will have all our buttons.

// To play sound when a click is detected on the button
for(var i = 0; i < drums.length; i++){
	drums[i].addEventListener("click", function() {
		var alpha = this.innerHTML; // this returns the Selected Element
		playSound(alpha); 
	});
}

// To play sound when a key is pressed on the keyboard
document.addEventListener("keydown", function(event){ //This is a call back function. Google or YouTube to get a better understanding of it. Here event can be of any name which is just telling what event has happened right now. And it contains all the properties of that event.

	playSound(event.key); // here key is one of such property which stores the string representation of the key pressed. You can say event is a object that has a whole lot of properties. Check mdn reference for more info.

});