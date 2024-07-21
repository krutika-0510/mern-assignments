// Assignment 7th
// Assignment 1: Basic File Handling
// Requirements:
// 1. Create a file named data.txt and write some text into it using the fs.writeFile method.
// 2. Read the content of data.txt and log it to the console using the fs.readFile method.
// 3. Append some additional text to data.txt using the fs.appendFile method.
// 4. Delete the file data.txt using the fs.unlink method.

// Import the fs module
const fs = require('fs');

// 1. Create a file named data.txt and write some text into it using the fs.writeFile method.
fs.writeFile('data.txt', 'This is the initial content.', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created and written successfully!');
});

// 2. Read the content of data.txt and log it to the console using the fs.readFile method.
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File content:', data);
});

// 3. Append some additional text to data.txt using the fs.appendFile method.
fs.appendFile('data.txt', ' This is the appended content.', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File appended successfully!');
});

// 4. Delete the file data.txt using the fs.unlink method.
fs.unlink('data.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted successfully!');
});

// Assignment 2: Synchronous vs Asynchronous File Handling
// Requirements:
// 1. Create a Node.js script that writes a large amount of text to a file (bigfile.txt) using fs.writeFileSync.
// 2. Read the content of bigfile.txt using fs.readFileSync and measure the time taken.
// 3. Repeat the same operations using fs.writeFile and fs.readFile, measuring the time taken for each.
// 4. Log the time differences and explain the results.

// Create a large string to write to the file
const largeString = new Array(1000000).fill('Hello Node.js! ').join('');

// Synchronous file writing
console.log('Synchronous file writing...');
const startSyncWrite = Date.now();
fs.writeFileSync('bigfile.txt', largeString);
const endSyncWrite = Date.now();
console.log(`Synchronous file writing took ${endSyncWrite - startSyncWrite}ms`);

// Synchronous file reading
console.log('Synchronous file reading...');
const startSyncRead = Date.now();
const fileContent = fs.readFileSync('bigfile.txt', 'utf8');
const endSyncRead = Date.now();
console.log(`Synchronous file reading took ${endSyncRead - startSyncRead}ms`);

// Asynchronous file writing
console.log('Asynchronous file writing...');
const startAsyncWrite = Date.now();
fs.writeFile('bigfile.txt', largeString, (err) => {
  if (err) {
    console.error(err);
  } else {
    const endAsyncWrite = Date.now();
    console.log(`Asynchronous file writing took ${endAsyncWrite - startAsyncWrite}ms`);
  }
});

// Asynchronous file reading
console.log('Asynchronous file reading...');
const startAsyncRead = Date.now();
fs.readFile('bigfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const endAsyncRead = Date.now();
    console.log(`Asynchronous file reading took ${endAsyncRead - startAsyncRead}ms`);
  }
});

// Assignment 3: Callback Functions
// Requirements:
// 1. Create a function doTask that takes a callback function as an argument and simulates an asynchronous operation using setTimeout.
// 2. The doTask function should log "Task started", wait for 2 seconds, then log "Task completed".
// 3. Pass a callback function to doTask that logs "Callback executed" after the task is completed.

// Define the doTask function that takes a callback function as an argument
function doTask(callback) {
  // Log "Task started"
  console.log('Task started');
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    // Log "Task completed"
    console.log('Task completed');
    // Execute the callback function
    callback();
  }, 2000); // wait for 2 seconds
}

// Define the callback function
function callbackFunction() {
  // Log "Callback executed"
  console.log('Callback executed');
}

// Call the doTask function and pass the callback function as an argument
doTask(callbackFunction);

// Assignment 4: Nested Callbacks (Callback Hell)
// Requirements:
// 1. Create a series of functions that simulate asynchronous tasks using setTimeout. Each function should take a callback and call it after a delay:
//    task1 logs "Task 1 completed" after 1 second.
//    task2 logs "Task 2 completed" after 2 seconds.
//    task3 logs "Task 3 completed" after 3 seconds.
// 2. Nest the callbacks to ensure task1 runs first, followed by task2, and finally task3.

// Define the task1 function that takes a callback function as an argument
function task1(callback) {
  console.log('Task 1 started');
  setTimeout(() => {
    console.log('Task 1 completed');
    callback();
  }, 1000); // wait for 1 second
}

// Define the task2 function that takes a callback function as an argument
function task2(callback) {
  console.log('Task 2 started');
  setTimeout(() => {
    console.log('Task 2 completed');
    callback();
  }, 2000); // wait for 2 seconds
}

// Define the task3 function that takes a callback function as an argument
function task3(callback) {
  console.log('Task 3 started');
  setTimeout(() => {
    console.log('Task 3 completed');
    callback();
  }, 3000); // wait for 3 seconds
}

// Nest the callbacks to ensure task1 runs first, followed by task2, and finally task3
task1(() => {
  task2(() => {
    task3(() => {
      console.log('All tasks completed');
    });
  });
});

// Assignment 5: Using Promises to Avoid Callback Hell
// Requirements:
// 1. Convert the previous task1, task2, and task3 functions to return Promises.
// 2. Use then() chaining to ensure task1 runs first, followed by task2, and finally task3.

// Define the task1 function that returns a Promise
function task1() {
  return new Promise((resolve, reject) => {
    console.log('Task 1 started');
    setTimeout(() => {
      console.log('Task 1 completed');
      resolve(); // resolve the promise
    }, 1000); // wait for 1 second
  });
}

// Define the task2 function that returns a Promise
function task2() {
  return new Promise((resolve, reject) => {
    console.log('Task 2 started');
    setTimeout(() => {
      console.log('Task 2 completed');
      resolve(); // resolve the promise
    }, 2000); // wait for 2 seconds
  });
}

// Define the task3 function that returns a Promise
function task3() {
  return new Promise((resolve, reject) => {
    console.log('Task 3 started');
    setTimeout(() => {
      console.log('Task 3 completed');
      resolve(); // resolve the promise
    }, 3000); // wait for 3 seconds
  });
}

// Use then() chaining to ensure task1 runs first, followed by task2, and finally task3
task1()
  .then(() => {
    return task2(); // return the promise from task2
  })
  .then(() => {
    return task3(); // return the promise from task3
  })
  .then(() => {
    console.log('All tasks completed'); // log when all tasks are complete
  })
  .catch((error) => {
    console.error('Error occurred:', error); // handle any potential errors
  });
