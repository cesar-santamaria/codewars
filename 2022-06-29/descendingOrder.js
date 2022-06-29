// are there any float integers? no
// take the input integer and return it with its digits in descending order
// 42145 => 54421
// 145263 => 654321

// create a function that takes an integer as an argument
const descendingOrder = (n) => {
   return Number(String(n).split("").sort((a,b) => b-a).join(""))
}

console.log(descendingOrder(0),0)
console.log(descendingOrder(1),1)
console.log(descendingOrder(42145),54421)
console.log(descendingOrder(145263),654321)