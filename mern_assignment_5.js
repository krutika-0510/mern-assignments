// Assignment 5: Closures and Prototypes
// Question 1
// ● Task: Write a function that returns a closure which adds a specific number to its argument.

// function createAdder that returns a closure which adds a specific number to its argument.
// Function to create an adder with a specified base value
function createAdder(x) {
  // Returns a new function that takes another value and adds it to the base value
  return function(y) {
      return x + y // Adds the base value (x) to the new value (y)
  }
}
// Create an adder with a base value of 5
const add5 = createAdder(5)
console.log(add5(12)) // Output: 17 (5 + 12)
console.log(add5(7))  // Output: 12 (5 + 7)
// Create an adder with a base value of 10
const add10 = createAdder(10)
console.log(add10(12)) // Output: 22 (10 + 12)
console.log(add10(7))  // Output: 17 (10 + 7)


// // Question 2
// // ● Task: Create a function using closure to keep track of how many times it has been called.

const createAdvancedCounter = () => {
  let count = 0; // Initialize a counter variable
  // Inner function (closure) that increments the counter and returns the count
  const increment = () => {
      count++ // Increment the counter
      return count // Return the updated count
  }
  // Inner function to reset the counter
  const reset = () => {
      count = 0 // Reset the counter to zero
  }
  // Object containing the increment function, reset function, and a property to track call count
  return {
      increment: () => increment(), // Increment the counter and return the count
      reset: () => reset(), // Reset the counter to zero
      getCount: () => count // Return the current count
  }
}
const advancedCounter = createAdvancedCounter()
console.log(advancedCounter.increment())
console.log(advancedCounter.increment())
console.log(advancedCounter.increment())
console.log(`Counter was called ${advancedCounter.getCount()} times`) 
advancedCounter.reset() // Reset the counter
console.log("Counter was reset.")
console.log(`Counter was called ${advancedCounter.getCount()} times`)
console.log(advancedCounter.increment()) 

  
// Question 3
// ● Task: Implement a prototype method to calculate the area of a rectangle object.

// Define a Rectangle object constructor
// Rectangle constructor function
class Rectangle {
  constructor(width, height) {
      this.width = width
      this.height = height
  }
}
// Prototype method to calculate area
Rectangle.prototype.calculateArea = function() {
  return this.width * this.height
}
const rect1 = new Rectangle(5, 10)
console.log(rect1.calculateArea())
const rect2 = new Rectangle(3, 7)
console.log(rect2.calculateArea())

// Question 4
// ● Task: Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.
// Define the Circle class

class Circle {
  // Constructor to initialize the radius of the circle
  constructor(radius) {
      this.radius = radius
  }
}
// Method to calculate the area of the circle
Circle.prototype.calculateArea = function() {
  return Math.PI * Math.pow(this.radius, 2) // Area formula: π * r^2
}
// Method to calculate the perimeter (circumference) of the circle
Circle.prototype.calculatePerimeter = function() {
  return 2 * Math.PI * this.radius // Perimeter formula: 2 * π * r
}
const circle1 = new Circle(4) // Create a circle with radius 4
console.log("Radius:", circle1.radius)
console.log("Area:", circle1.calculateArea().toFixed(2))
console.log("Perimeter:", circle1.calculatePerimeter().toFixed(2))
const circle2 = new Circle(6) // Create a circle with radius 6
console.log("Radius:", circle2.radius)
console.log("Area:", circle2.calculateArea().toFixed(2))
console.log("Perimeter:", circle2.calculatePerimeter().toFixed(2))


// Question 5
// Task
// Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. 
// Each function should be able to modify or access the private counter, demonstrating a more complex use of closures.

function All() {
  let a = 0
  return {
    increment: function() {
      a++
    },
    decrement: function() {
      a--
    },
    reset: function() {
      a = 0
    },
    getValue: function() {
      return a // Return the value instead of logging it
    }
  }
}
const calling = All()
calling.increment() // Increment the counter
console.log(calling.getValue())
calling.increment() // Increment the counter again
console.log(calling.getValue())
calling.increment() // Increment the counter again
console.log(calling.getValue())
calling.decrement() // Decrement the counter
console.log(calling.getValue())
calling.reset() // Reset the counter
console.log(calling.getValue())
