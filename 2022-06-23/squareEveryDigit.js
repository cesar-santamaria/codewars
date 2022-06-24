/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer 
*/

//P: 
//will the function parameter always be a number? or can it be a string?
//will the number ever be a float? 
//can the input be NaN?

//R: 
//should return the squared result of each number and concatenated together to form one single output. Function takes in an integer and returns an integer

//E:
// 9119 => 811181
// 555 => 252525
// 1234 => 14916

//Ps:
// once each number is extracted individually I want to square that number and store it in a variable
// want to extract each individual number from the single input
// once all numbers have been extracted and squared individually then I can concatenate it and put them together.
// create a function that takes in a single number as its parameter
function squareDigits(num){
  const numToString = num.toString().split("")
  const numberSquared = numToString.map(number => number*number)
  let result = "";
  numberSquared.forEach(element => {
    result = result + element.toString()
  });
  return result
}

console.log(squareDigits(9119), 811181)