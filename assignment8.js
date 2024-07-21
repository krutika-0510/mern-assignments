// Assignment 1: Basic Async/Await for Data Fetching 
// Requirements: 
// 1. Create a Node.js script. 
// 2. Use the axios library to fetch data from a public API (e.g., 
// https://jsonplaceholder.typicode.com/posts). 
// 3. Create an asynchronous function that fetches the data and logs it to the console. 4. Call the asynchronous function and ensure the data is printed to the console.


// Import the axios library
const axios = require('axios');

// Define an asynchronous function to fetch data
async function viewData() {
  // Use axios to fetch data from the public API
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  
  // Log the fetched data to the console
  console.log("Data is fetched");
  console.log(response.data);
}

// Call the asynchronous function
viewData();


// Assignment 2: Handling Errors with Async/Await Requirements: 1. Modify the script from Assignment 1 to include error handling using try/catch. 2. Simulate an error by providing an invalid URL to the fetch request. 3. Log an appropriate error message to the console when an error occurs.


// Import the axios library
const axios = require('axios');

// Define an asynchronous function to fetch data
async function viewData() {
    try{
        // Use axios to fetch data from the public API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // Log the fetched data to the console
        console.log("Data is fetched");
        console.log(response.data);
    }
    catch(error){           // Log the error to the console if any
        console.log("Error Occured");
        console.log(error);
        }
}

// Call the asynchronous function
viewData();

// Assignment 3: Sequential Data Fetching with Async/Await
// Requirements:
// 1.	Create a Node.js script that fetches data from two different APIs (e.g., https://jsonplaceholder.typicode.com/posts and https://jsonplaceholder.typicode.com/users).
// 2.	Use async/await to fetch the data from the first API and then fetch the data from the second API.
// 3.	Log the results from both APIs to the console.

// Import the axios library
const axios = require('axios');       

async function viewData() {
  // Created function fetch asynchronously
  const res1 = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const res2 = await axios.get('https://jsonplaceholder.typicode.com/users');
  //Used get function from axios library to fetch data from the given url

  console.log('Fetched Data 1:');
  console.log(res1.data)
  console.log('Fetched Data 2:');
  console.log(res2.data)
  //prints data
}

viewData();          // Call to fetch function


// Assignment 4: Parallel Data Fetching with Async/Await Requirements: 1. Modify the script from Assignment 3 to fetch data from both APIs in parallel using Promise.all. 2. Ensure the results from both APIs are logged to the console after both fetch operations complete.

// Import the axios library
const axios = require('axios');
// Created function fetch asynchronously
async function viewData() {
    // Created promise to fetch data from the first API
    const promise1 = axios.get('https://jsonplaceholder.typicode.com/posts');
    // Created promise to fetch data from the second API
    const promise2 = axios.get('https://jsonplaceholder.typicode.com/users');
    // Used Promise.all to fetch data from both APIs in parallel
    const [res1, res2] = await Promise.all([promise1, promise2]);
    // Used get function from axios library to fetch data from the given url
    console.log('Fetched Data 1:');
    console.log(res1.data)
    console.log('Fetched Data 2:');
    console.log(res2.data)
    //prints data
}
viewData();          // Call to fetch function


// Assignment 5: Chaining Async Functions
// Requirements:
// 1. Create two asynchronous functions:
// fetchPosts: Fetches data from https://jsonplaceholder.typicode.com/posts.
// o fetchComments: Fetches data from
// https://jsonplaceholder.typicode.com/comments.
// 2. Create a third asynchronous function that calls fetchPosts, waits for it to complete, and then calls fetchComments.
// 3. Log the results from both functions to the console.


// Import the axios library
const axios = require('axios');
// Created function fetch asynchronously
async function fetchPosts() {
    // Used get function from axios library to fetch data from the given url
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //prints data
    console.log(res.data)
}

// Created function fetch asynchronously
async function fetchComments() {
    // Used get function from axios library to fetch data from the given url
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
    //prints data
    console.log(res.data)
}

// Created function fetch asynchronously
async function fetchPostsAndComments() {
    // Called fetchPosts function
    await fetchPosts();
    // Called fetchComments function
    await fetchComments();
}
