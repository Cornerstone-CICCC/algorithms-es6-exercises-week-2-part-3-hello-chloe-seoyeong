// Exercise 3: Set
// Instructions: Create a Set named `uniqueNumbers` and add some numbers to it using .add(), including some duplicates. 
// Verify that the Set only keeps unique values by logging it to the console.

const uniqueNumbers = new Set();

// Your code here
uniqueNumbers.add(3);
uniqueNumbers.add(89);
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(89);
uniqueNumbers.add(89);

console.log(uniqueNumbers);
