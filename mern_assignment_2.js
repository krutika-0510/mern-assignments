// // Question 1: Multiplication Table Generator
// // ● Task: Write a JavaScript program that generates a multiplication table for
// // numbers from 1 to 10. The program should use nested loops to create a
// // table in the console output.
// // ● Requirements:
// // ○ Use a nested for loop.
// // ○ Format the output so each row shows the multiplication results for a
// // number from 1 to 10.

// // Multiplication Table Generator
// for (let i = 1; i <= 10; i++) {             // outer for loop to declare that the table is of that number
//     console.log("Multiplication table of ", i)  // to print that the table is of i number
//     for (let j = 1; j <= 10; j++) {       // inner for loop to multiply the i number from 1 to 10      
//         let result = i*j                  // perform multiplication operation between i and j
//     }
//     console.log(i+ '*' +j+ '=' ,result);        // print the result of the multiplication
//   }
//   console.log("") // print a blank line for better view of the multiplication tables


// //   Question 2: Sum of Numbers in an Array
// // ● Task: Write a JavaScript program that calculates the sum of all numbers in
// // a given array using a loop.
// // ● Requirements:
// // ○ Use a for loop or a for...of loop.
// // ○ Initialise the array with at least 5 numbers.

// arr = [12,13,14,15,16]                    // arr contain elements of the array
// let res=0                                 // initially res i.e. is declared as 0
// for(let i of arr) {                       // i is the element of the arr // for loop is used to check whether i i.e. is present in arr
//     res = res +i                          // the res is added with i and again stored in res
// }
// console.log("Addition is : ",res)         // prints the final result of addition of arr


// // Question 3: Palindrome Checker
// // ● Task: Write a JavaScript function that checks whether a given string is a
// // palindrome (reads the same forward and backward).
// // ● Palindrome Example:
// // ○ String: LEVEL
// // ○ Reversing the above string: LEVEL
// // ○ As the String and its reverse are the same that means “Level” is
// // a palindrome.
// // ● Requirements:
// // ○ The function should take a string as an argument.
// // ○ Return true if the string is a palindrome, otherwise return false.


// function check_palindrome(str) {                //declare check_palindrome function with parameter str
//     let reverse  = "";                                 //create reverse variable 
//     //this for used to reverse string and store in rev
//     for (let i = str.length - 1; i >= 0; i--) {       //i used to access string form end
//         reverse = reverse + str.charAt(i);                  //concate reverse string with i index of str
//     }
//     //this for used to compare rev string and str string
//     for (let i = 0; i < str.length; i++) {          
//         let a = str.charAt(i);                            
//         let b = reverse.charAt(i);                            
//         if (a != b) {                             
//             return false;                          
//         }
//     }
//     return true;                              
// }
// console.log(check_palindrome("LEVEL"))

// // Question 4: Fibonacci Sequence Generator
// // ● Task: Write a JavaScript function that generates the first n numbers of the
// // Fibonacci sequence.
// // ● Fibonacci Sequence: 0 1 1 2 3 5 8 13 21 34 . . .
// // ● Requirements:
// // ○ The function should take an integer n as an argument.
// // ○ Return an array containing the first n Fibonacci numbers.

// function generateFibonacci(n) {
//     if (n <= 0) return []; // Return an empty array for non-positive n
//     if (n === 1) return [0]; // Return [0] if n is 1
//     let fibArray = [0, 1];       // Initialize the array with the first two Fibonacci numbers
//     for (let i = 2; i < n; i++) {     // Generate the rest of the Fibonacci numbers
//         fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//     }
//     return fibArray;                   //Return the array of Fibonacci numbers 
// }
// console.log(generateFibonacci(10))      // Calling the generateFibonacci function for displaying the array of Fibonacci Series



// // Question 5: Block Scope with Let and Const
// // ● Task: Write a JavaScript program that shows the difference between block
// // scope and function scope by using let, const, and var. Declare variables
// // inside an if block and try to access them outside the block.
// // ● Requirements:
// // ○ Use var, let, and const inside a block.
// // ○ Demonstrate the scope difference with console output.


// // var variables are accessible outside and inside the block of scope also, while let and const variables are not accessible outside the block of scope where they were declared.
// // therefore, an error will occur while accessing the let and const variables outside the block of scope
//     if (true) {
//         var a = "A";
//         let b = "B";
//         const c = "C";

//         // Accessing variables inside the block
//         console.log("Inside the block:");
//         console.log(a);  
//         console.log(b);  
//         console.log(c);  
//     }

//     // Accessing variables outside the block
//     console.log("Outside the block:");
//     console.log(a);  
//     console.log(b);
//     console.log(c);  

    

