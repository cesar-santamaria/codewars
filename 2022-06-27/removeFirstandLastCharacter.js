/* 
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.
*/

const removeChar = (str) => {
  return str.slice(1, -1);
 };

console.log(removeChar("The quick brown fox jumps over the lazy dog"), ", Example: he quick brown fox jumps over the lazy do")
console.log(removeChar("Hi"), ", Example: ")
