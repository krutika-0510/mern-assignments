// ### Assignment 3: Array and Array Methods

// #### Question 1
// Task: Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized.

// Example Usage:
// javascript
// const words = ["apple", "banana", "cherry"];
// console.log(capitalizeStrings(words)); // Output: ["Apple", "Banana", "Cherry"]


// Initialize an array with lowercase strings
array = ['krutika', 'mahesh', 'pardule'];
function Capitalizedstring(array) {
    // Use the map function to create a new array with each word transformed
    return array.map(word => word.charAt(0).toUpperCase() + word.slice(1))
      // Capitalize the first letter of the word and concatenate it with the rest of the word
}
// Call the function and print the result
console.log(Capitalizedstring(array));
  

// #### Question 2
// Task: Create a function that returns the second largest element in an array.

// Example Usage:
// javascript
// const arr = [3, 1, 4, 2, 5];
// console.log(secondLargest(arr)); // Output: 4

// Define an array to test the function
const arr = [6, 8, 5, 3, 7];
function secondLargest(arr) {
  // Check if the array has fewer than 2 elements
  if (arr.length < 2) {
    // If true, print a message and exit the function
    console.log("Array must contain at least two elements.");
    return; // Make sure to return early to avoid further execution
  }
  // Sort the array in descending order
  let sortedArr = arr.sort((a, b) => b - a);
  // Return the second element from the sorted array, which is the second largest
  return sortedArr[1];
}
// Call the function with the test array and log the result
console.log(secondLargest(arr));


// #### Question 3
// Task: Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.

// Example Usage:
// javascript
// const objects = [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Jim", age: 20}];
// const key = "name";
// console.log(getValuesByKey(objects, key)); // Output: ["John", "Jane", "Jim"]

const objects = [
  {name: "Shweta", age: 20},
  {name: "Krutika", age: 18}, 
  {name: "Roshani", age: 17}
]; // Define an array of objects with 'name' and 'age' properties
const keys = "name"; // Define the key whose values we want to extract
function getValuesByKey(arr, key) {
  // Use the map method to extract the values corresponding to the key from each object
  // For each object in the array, access the value associated with the key and return it
  return arr.map(obj => obj[keys]); // Note: 'keys' should be 'key' to match the function parameter
}
console.log(getValuesByKey(objects, keys)); // Output the result of calling getValuesByKey with the 'objects' array and 'keys' key

// #### Question 4
// Task: Calculate the factorial of every element in an array and store it in a new array.

// Example Usage:
// javascript
// const numbers = [1, 2, 3, 4];
// console.log(factorialArray(numbers)); // Output: [1, 2, 6, 24]

//Function to calculate the factorial of a number recursively
const numbers = [3,4,5,6];
function factorial(n) {
  // If the number is 0 or 1, return 1 (base cases)
  if (n === 0 || n === 1) {
    return 1;
  }
  // Otherwise, return n multiplied by the factorial of (n-1)
  return n * factorial(n - 1);
}
// Main function to calculate the factorial of each element in an array
function factorialArray(arr) {
  // Create an empty array to store the factorials
  let result = [];
  // Go through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // Calculate the factorial of the current element
    // Add the factorial result to the new array
    result.push(factorial(arr[i]));
  }
  // Return the array with all the calculated factorials
  return result;
}
// Calculate the factorials of the numbers array and print the result
console.log(factorialArray(numbers));


// #### Question 5
// Task: Create a function to find the intersection of two arrays.

// Example Usage:
// javascript
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log(intersection(array1, array2)); // Output: [3, 4]


const array1 = [6,7,8,9];
const array2 = [8,9,10,11];
function intersection(arr1, arr2) {
  // Initialize an empty array to store the intersection
  let result = [];
  // Iterate through elements of arr1
  for (let element of arr1) {
    // Check if element is in arr2 using includes method
    if (arr2.includes(element)) {
      // Add element to result if it exists in both arrays
      result.push(element);
    }
  }
  return result;
}
console.log(intersection(array1, array2));