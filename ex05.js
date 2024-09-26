// Exercise 5: Object Methods
// Instructions: Create an object named `person` with properties `firstName` and `lastName`. 
// Add a method `fullName` that returns the full name of the person by combining `firstName` and `lastName`. 
// Log the result of calling `fullName` to the console.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  // Your code here
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
};

console.log(person.fullName());
