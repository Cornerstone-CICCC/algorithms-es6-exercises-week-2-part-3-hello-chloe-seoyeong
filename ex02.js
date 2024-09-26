// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  // Your code here
  const subNumbers = numbers;
  const difference = subNumbers.reduce((total, current) => {
    if(total === 0) {
      return current;
    }
    return total - current;
  }, 0)

  return difference;
}

console.log(subtract(10, 2, 3)); // Example usage
console.log(subtract(10, 2, 3, 5));
