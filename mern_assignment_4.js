// Assignment 4: Object and String Methods

// Question 1
// Task: Write a function that takes an object and returns an array of the object's keys and values.
// let person = { name: "John", age: 30 };
// console.log(getKeysAndValues(person)); // Output: [["name", "John"], ["age", 30]]

// Object named 'person' with name and age as key properties
let person = { 
  name: "Krutika",
  age: 18 
}
// Function named getKeysAndValues that takes an object and returns an array of the object's keys and values.
function getKeysAndValues(obj) {
  // For each key in the object (represented by 'key'), create an array with the key and its corresponding value
  return Object.keys(obj).map(key => {        
    return [key, obj[key]]
  });   
}
// log statement to call the function 'getKeysAndValues' with the parameter passed as person 
console.log(getKeysAndValues(person))


  
// Question 2
// ● Task: Create a function to convert a string to title case.
// # Example
//  console.log(toTitleCase("hello world")); // Output: Hello World

// Function to Capitalize first letter of each word
function toTitleCase(str) {
  // Split the string into an array of words using space
  return str
    .split(' ')
    // Map over each word in the array
    .map(word => 
      // Capitalize the first letter of each word and concatenate it with the rest of the word in lowercase
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    // Join the array of words back into a single string with spaces in between
    .join(' ');
}
// Log statement to call the function with a parameter passed
console.log(toTitleCase("hello krutika"));

// Question 3
// ● Task: Implement a function that checks if an object is empty.

function isEmpty(obj) {
  // Check if the object has no own enumerable properties
  return Object.keys(obj).length === 0;
}
let emptyObj = {};
let nonEmptyObj = { name: "Krutika" };

console.log(isEmpty(emptyObj));
console.log(isEmpty(nonEmptyObj));

// Question 4
// ● Task: Write a function to count the number of occurrences of each character in a string.
//  console.log(charCount("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

function charCount(str) {
  // Initialize an empty object to store the character counts
  let count = {};
  // Iterate over each character in the string
  for (let char of str) {
    // If the character is already in the object, increment its count
    if (count[char]) {
      count[char]++;
    } else {
      // If the character is not in the object, add it with a count of 1
      count[char] = 1;
    }
  }
  // Return the object containing the character counts
  return count;
}
console.log(charCount("elephant"));
 

