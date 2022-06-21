/* 
DESCRIPTION:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

// P:
// Will the input always be a number? 
// Can the input be zero?
// Can the input be a float/decimal?

//R:
// the result should be the negative output of that same number.

//E:
// if number is 20 than output is -20
// if number is -20 than output should be -20
// if number is 0 than output should be 0
// if number is 20.5 than output should be -20.5

// PS:
// create a condition if the input is 0 to immediately return the default value of 0
// create a second condition if the input is positive to return the negative version of itself

// create a function called returnNegative that takes in a single number as it's parameter
const makeNegative = (num) => {
  if (num > 0) return -num 
  return num
};

console.log(makeNegative(1));    // return -1
console.log(makeNegative(-5));   // return -5
console.log(makeNegative(0));    // return 0
console.log(makeNegative(0.12)); // return 0.12