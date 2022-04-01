// Object in javascript help to assign some proerties to a variable.
// Lets say we are creating our own world and we have to create humans. So to create say 3 humans one approach can be
var human1 = "Kunal";
var human1Age = 18;
var human1Gender = "Male";
var human1Weight = 58;
var human1Hobby = ["Sketch", "Sing", "Anime", "Read"];

var huma21 = "Ayush";
var human2Age = 14;
var human2Gender = "Male";
var human2Weight = 38;
var human2Hobby = ["Code"];

var human1 = "Shruti";
var human1Age = 18;
var human1Gender = "Female";
var human1Weight = 50;
var human1Hobby = ["Travel"];

// the above method is not preferable in this case as we have to write too many lines of code and it also is not well structured. Instead this we should use objects which looks like-
var human1 = {
 name: "Kunal",
 age: 18,
 gender: "Male",
 weight: 58,
 hobby: ["Sketch", "Sing", "Anime", "Read"]
}

var human2 = {
  name: "Ayush",
  age: 14,
  gender: "Male",
  weight: 38,
  hobby: ["Code"]
}

var human3 = {
  name: "Shruti",
  age: 18,
  gender: "Female",
  weight: 50,
  hobby: ["Travel"]
}

//now we can access these using a dot followed by the property
console.log(human3.name);
console.log(human1.hobby[3]);
//This way it is more structured but still we have to write many lines of code. We can notice we have same properties for every Human. Therefore, we can create a Human constructor instead that will create a human when the object is created. 

// Human constructor
function Human(name, age, gender, weight, hobby){
  this.name = name; // this keyword assigns the value of the name variable in a different name variable which is of the object.
  this.age = age; // this basically means we are referring to the object and this.age means we are referring to variable age of the object.
  this.gender = gender;
  this.weight = weight;
  this.hobby = hobby;
  // You can also add functions inside of an object like -
  this.introduce = function () {
    console.log("Hello! My name is " + this.name + ". I am " + this.age + " years old.");
  }
}

// Now, whenever we want to add a new human we can just create an object for that human with the above following property like-
var Kunal = new Human("Kunal", 18, "Male", 58, ["Sketch", "Sing", "Anime", "Read"]);
var Shruti = new Human("Shruti", 18, "Female", 50, ["Traveling"]);
var Ayush = new Human("Ayush", 14, "Male", 38, ["Code"]);
// to access these we can just use the same method as above
console.log(Kunal.weight);
console.log(Shruti.hobby[0]);
console.log(Ayush.gender);
// To access and execute the function of an object 
Kunal.introduce();
Shruti.introduce();
Ayush.introduce();


