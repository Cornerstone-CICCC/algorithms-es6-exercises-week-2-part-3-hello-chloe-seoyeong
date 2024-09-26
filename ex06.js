// Exercise 6: 'this' Keyword
// Instructions: Create an object named `car` with a property `brand` and a method `logBrand` that logs the brand to the console. 
// Use the `this` keyword inside the method to refer to the `brand` property.

const car = {
  brand: 'Toyota',
  logBrand() {
    // Your code here
    console.log(this.brand);
  }
};

car.logBrand();
