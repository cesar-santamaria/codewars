// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//P: will the input string always be numbers?

//R: 
// return the highest and lowest numbers of input string
// must be two numbers separated by a space

//E:
// 1 2 3 4 => 1 4
// 2 -4 -6 8 => -6 8
// 9 2 -19 7 => -19 9

//Ps: 
// create a function highAndLow that takes in a string as its parameter
// declare a variable to store string result
// I want to loop through each number in string
// compare the first value to the second and if its bigger than keep first value if not take second and continue that pattern for next numbers.
// do the same process but trying to find lowest number
// store highest and lowest number in a template string sperated by space
// return result

const highAndLow = (numbers) => {
  const arrayNum = numbers.split(" ")
  let lowestNum = arrayNum[0];
  let highestNum = arrayNum[0];

  for (let number of arrayNum) {
    if(number < lowestNum) lowestNum = number
    if(number > highestNum) highestNum = number
  }
  return `${lowestNum} ${highestNum}`
}

console.log(highAndLow("11 23 -73 42"), "-73 42")

//advanced
/* 
  function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  } 
*/