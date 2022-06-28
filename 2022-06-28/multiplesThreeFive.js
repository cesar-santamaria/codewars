/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in

*/

// P:
// will the input always be a single number as its data type or will it be a number within a string?
// can the input be a decimal number?
// will the number always be a positive? or can it be negative as well?

// R:
// return the multiples of 3 or 5 for given input number.
// if the number is a multiple of both 3 and 5 only count it once.
// if number is negative return 0

// E:
// 15 => 3+5+6+9+10+12+15 => 60
// 10 => 3+5+6+9+10 =>

// Ps:
// create a function that takes a single number as its parameter
// declare a variable and set the value to 0
// create if condition to return 0 if number is negative
// create a loop that starts at 3 and iterated up to the input number given.
  // loop contain if-conditions to see if the value is divisible by 3 or 5
  // if it is than we push that number to the empty array
// add the numbers together in the array and return that result.
const solution = (number) => {
  let sum = 0;
  if (number === -number) return 0
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

solution(10, 23)
