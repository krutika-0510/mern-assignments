// // Problem: Write a program that defines and logs different data types. The program should
// // Declare a variable of each of the following data types: string, number, boolean, object, and array.
// // Assign appropriate values to each variable.
// // Log the value and type of each variable to the console.

// // Declaring the variables and assigning proper values to them
// let MyString = 'Good Morning!';                // String variable and its value
// let MyNumber = 92;                             // Number variable and its value
// let MyBoolean = true;                          // Boolean variable and its value
// let MyObject = {
//     name: "Krutika", age: 18}
//     ;     // Object variable and its value
// let MyArray = [5, 7, 9, 11, 13];               // Array variable and its value

// // Printing the values declared above and also printing its datatype
// console.log("String value:", MyString, ", Datatype of String value:", typeof MyString);     // String variable and its datatype
// console.log("Number value:", MyNumber, ", Datatype of Number value:", typeof MyNumber);     // Number variable and its datatype
// console.log("Boolean value:", MyBoolean, ", Datatype of Boolean value:", typeof MyBoolean); // Boolean variable and its datatype
// console.log("Object value:", MyObject, ", Datatype of Object value:", typeof MyObject);     // Object variable and its datatype
// console.log("Array value:", MyArray, ", Datatype of Array value:", typeof MyArray);         // Array variable and its datatype

// // Problem: Write a program that performs basic arithmetic operations. The program should:
// // Prompt the user to enter two numbers.
// // Perform addition, subtraction, multiplication, and division on the two numbers.
// // Display the results of each operation.

// // Taking 2 numbers from the user using prompt() function for the arithmetic operations
// let n1 = parseFloat(prompt("Enter the first number:"))   // 1st input from user
// let n2 = parseFloat(prompt("Enter the second number:"))  //2nd input from user

// // Performing arithmetic operations
// let sum = n1 + n2               // addition operation
// let difference = n1 - n2        // subtraction operation
// let product = n1 * n2           // multiplication operation
// let quotient = n1 / n2          // division operation

// // Displaying the results
// console.log("The result of addition of ",n1, "and ",n2, "is : " + sum)               // addition result
// console.log("The result of subtraction of ",n1, "and ",n2, "is : " + difference)     // subtraction result
// console.log("The result of multiplication of ",n1, "and ",n2, "is : " + product)     // multiplication result
// console.log("The result of division of ",n1, "and ",n2, "is : "+ quotient)           // division result

// // Problem: Create a program that checks if a number is positive, negative, or zero. The program should:
// // Prompt the user to enter a number.
// // Use a conditional statement to check if the number is positive, negative, or zero.
// // Display an appropriate message based on the result.

// // Taking number from the user using prompt() to check whether the given number is positive,negative or zero
// let n1 = parseFloat(prompt("Enter the first number:"))   // Input from user

// // Conditional statement to check if the number is positive, negative, or zero.
// // Also displaying appropriate message based on the result.
// if (n1>0){                                            // condition to check whether the number is greater than 0
//     console.log(`${n1} is a positive number`)         // if it is true then it is a positive number
// }
// else if(n1<0){                                        // condition to check whether the number is lesser than 0
//     console.log(`${n1} is a negative number`)         // if it is true then it is a negative number
// }
// else{                                                 // if the above 2 conditions are not satisfied then this condition will execute
//     console.log(`The number entered is 0`)            
// }

// // Problem: Write a program that prints all even numbers from 1 to 20. The program should:
// // Use a loop to iterate through the numbers from 1 to 20.
// // Use a control flow keyword (e.g., continue) to skip odd numbers.
// // Log each even number to the console.

// // For loop is used to iterate through the numbers from 1 to 20
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {              // Check if the current number is odd
//         continue;                  // If the number is odd, skip to the next iteration  // Skip odd numbers
//     }
//     console.log(i);                // If the number is even, print in the console.log()
// }

// // Problem: Create a program that simulates a simple grading system. The program should:
// // Prompt the user to enter a numeric grade (0-100).
// // Use conditional statements to determine the letter grade based on the numeric grade:
// // 90-100: A
// // 80-89: B
// // 70-79: C
// // 60-69: D
// // 0-59: F
// // Display the letter grade to the user.

// // Prompt the user to enter a numeric grade
// let grade = parseFloat(prompt("Enter a numeric grade (0-100):"));

// // Initialize a variable to hold the letter grade
// let letterGrade;

// // Determine the letter grade using a switch statement
// switch (true) {
//     // Check if the grade is between 90 and 100 (inclusive)
//     case (grade >= 90 && grade <= 100):
//         letterGrade = 'A';  // Assign 'A' to letterGrade
//         break;  // Exit the switch statement

//     // Check if the grade is between 80 and 89 (inclusive of 80, exclusive of 90)
//     case (grade >= 80 && grade < 90):
//         letterGrade = 'B';  // Assign 'B' to letterGrade
//         break;  // Exit the switch statement

//     // Check if the grade is between 70 and 79 (inclusive of 70, exclusive of 80)
//     case (grade >= 70 && grade < 80):
//         letterGrade = 'C';  // Assign 'C' to letterGrade
//         break;  // Exit the switch statement

//     // Check if the grade is between 60 and 69 (inclusive of 60, exclusive of 70)
//     case (grade >= 60 && grade < 70):
//         letterGrade = 'D';  // Assign 'D' to letterGrade
//         break;  // Exit the switch statement

//     // Check if the grade is between 0 and 59 (inclusive of 0, exclusive of 60)
//     case (grade >= 0 && grade < 60):
//         letterGrade = 'F';  // Assign 'F' to letterGrade
//         break;  // Exit the switch statement

//     // Handle any grades outside the valid range (0-100)
//     default:
//         letterGrade = 'Invalid grade';  // Assign 'Invalid grade' to letterGrade
// }

// // Display the letter grade to the user
// console.log("The letter grade is: " + letterGrade);

