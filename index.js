// Declare variables
let number1 = 10;
const number2 = 5;
let result;

// Use operators to perform calculations
result = number1 + number2;

// Use strings, numbers, and boolean values cached within variables
const greeting = "Hello";
const age = 25;
const isAdult = true;

// Use if/else statements
if (isAdult) {
  console.log(`${greeting}! You are an adult.`);
} else {
  console.log(`${greeting}! You are not an adult yet.`);
}

// Use switch statement
let dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week!");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("It's a regular day.");
}

// Use try/catch statements
try {
  // Incorrect data type to simulate an error
  const invalidData = "abc";
  const parsedData = parseInt(invalidData);
  if (isNaN(parsedData)) {
    throw new Error("Invalid data type.");
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
}

// Use loops
// While loop with break
let count = 0;
while (count < 5) {
  console.log(`Count: ${count}`);
  if (count === 3) {
    break;
  }
  count++;
}

// For loop
for (let i = 0; i < 3; i++) {
  console.log(`Iteration: ${i}`);
}

// Create arrays and objects
const myArray = [1, 2, 3, 4, 5];
const myObject = { name: "John", age: 30, city: "New York" };

// Demonstrate retrieval, manipulation, and removal
const arrayElement = myArray[2];
console.log(`Array element at index 2: ${arrayElement}`);

myArray.push(6); // Add item to the end
console.log("Updated Array:", myArray);

delete myObject.age; // Remove property
console.log("Updated Object:", myObject);

// Use functions
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

const product = multiplyNumbers(3, 4);
console.log("Product:", product);

// Program outputs processed data
console.log("Result:", result);
