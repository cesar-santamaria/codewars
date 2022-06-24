/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//P: will the input always be a string?

//R: result should be the total number of vowels in the given string. Does not include the letter y

//E: The quick brown fox jumps over the lazy dog => 11

//Ps:
// create a function that takes a string as a parameter
// want to store the result in a variable vowelTotal
// loop through each letter in a string
  // if that letter is a vowel add 1 to vowelTotal
  // if not a vowel than continue to next letter until we reach end of string
// return result vowelTotal

const vowelCount = (string) => {
  let vowelSum = 0;
  let stringArray = string.split("")
  for (let key of stringArray) {
    if (key === "a" || key === "e" || key === "i" || key === "o" || key === "u") {
      vowelSum += 1
    }
  }
  return vowelSum
};

console.log(vowelCount("the quick brown fox jumps over the lazy dog"), 11)