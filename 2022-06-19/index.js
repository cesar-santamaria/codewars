/* 
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/

// P - Parameters find stuff about the problem
// numbers can be negative or positive? yes
// numbers can be fractions, decimals, or zero? yes
// if array is empty return 0

// R - Result what you trying to get
// want to return the total sum of the number array.
// returning an array? or just a value? just the value

// E - examples (aim for 3 or 4)
// [2,4,6,8] = 20
// [2.5,4,6,8] = 20.5
// [-8] = -8
// [] = 0

// Ps - Pseudo Code
// create a function that takes in an array as its argument.
// create variable to store result.
// if array is empty then return zero.
// loop through each element in given array.
// sum each element by its previous element until you reach the end of the array.
// store that value in a variable.
// return that variable result.

const sumArray = (array) => {
  let sum = 0;
  if (array.length === 0) return sum;
  for (let i = 0; i < array.length; i++) {
     sum += array[i];
  }
  return sum;
}

// results
console.log(sumArray([2,4,6,8])) // 20
console.log(sumArray([2.5,4,6,8])) // 20.5
console.log(sumArray([])) // 0
console.log(sumArray([-2.5,-4,-6,-8])) // -20.5