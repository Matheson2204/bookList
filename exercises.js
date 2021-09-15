// Objects

// 1. Create an object in Javascript assigned to a variable named ‘school’ that contains the following properties:
const school = {
    name: "Hogwarts",
    location: "Unknown",
    established: "the 10th Century",

    displayInfo() {
        console.log(`My school ${this.name} was established in ${this.established} at ${this.location}`);
    }
};

console.log(school.name);
school.displayInfo();
// name: "Hogwarts"
// location: "Unknown"
// established: "the 10th Century"
// a) Outside the class, Console.log the school name.
// b) To the ‘school’ object, add a function ‘displayInfo’ that logs to the console “My school ____ was established in ___ at ____”
// filling the blanks with the relevant values - (remember to do the above using the ‘this’ keyword)
// c) Outside the class, Call the function ‘displayInfo’

// Classes

// We will now create a template for making school objects! You may want to refer to Class Syntax: https://www.w3schools.com/js/js_classes.asp ;
// 1. create a class called CreateSchool
class CreateSchool {
    constructor(name, location, established) {
        this._name = name;
        this._location = location;
        this._established = established;
    }
    displayInfo() {
        console.log(`My school ${this._name} was established in ${this._established} at ${this._location}`);
    }
}
const hogwarts = new CreateSchool('hogwarts', 'Unknown', 'the 10th Century' );
console.log(hogwarts);

hogwarts.displayInfo()
    

// a) in its constructor method, give it the properties of name, location and established
// b) add a method called displayInfo that console.logs the properties
// c) Using this class, create a new instance (object) with the values of the object we made above
// d) call this Instance's (this new object created from the template) displayInfo();
