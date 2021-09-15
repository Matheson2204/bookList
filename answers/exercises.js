// javascript code demonstrating a simple object

// school object
let school = {
  name: "Hogwarts",
  location: "Scotland",
  established: "the 10th Century",
  displayInfo: function () {
    console.log(
      `${school.name} was established in ${school.established} in ${school.location}`
    );
  },
};
//a)
console.log(school.name);
//c)
school.displayInfo();


//classes
class CreateSchool {
  constructor(name, location, year) {
    this.name = name;
    this.location = location;
    this.established = year;
  }
  displayInfo() {
    return `${this.name} was established in ${this.established} at ${this.location}`;
  }
}

let newSchool = new CreateSchool("Fake Academy", "Fake Location", "Fake year");
console.log(newSchool.displayInfo());
