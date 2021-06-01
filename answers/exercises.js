// javascript code demonstrating a simple object
 
// person object
const person = {
    firstName: "John",
    lastName: "Doe",
    "City of Birth": "Sydney",
    country: "Australia",
  };
  //a)
  console.log(person);
  //b)
  console.log(person.country);
  //c)
  console.log(person["City of Birth"]);
  
// school object
  let school = {
    name: "St Joseph",
    location: "Sydney",
    "established year": "1971",
    displayInfo: function () {
      console.log(`${school.name} was established  
                in ${school["established year"]} at ${school.location}`);
    },
  };
  //a)
  console.log(school.name);
  //b)
  console.log(school.location);
  //c)
  console.log(school['established year']);
  //d)
  school.displayInfo();
  //e)
  school.graduated = true;
  //f)
  console.log(school);
  
  //classes
  class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Jane Doe";
		return new Person(name);
	}
}

let anonymous = Person.createAnonymous("male");
console.log(anonymous);