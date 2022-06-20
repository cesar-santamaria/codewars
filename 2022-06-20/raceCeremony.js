/* 
The national go-kart racing competition is taking place in your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

The organizers want a podium that satisfies:

The first place platform has the minimum height possible
The second place platform has the closest height to first place
All platforms have heights greater than zero.

*/

// P: 
// will the input always be a number? yes
// will the input ever be a float? no
// if the input is zero what should the output return? 0
// will the input always be a single number? yes

// R:
// should return a an array of three numbers in the order of lowest, highest, second highest

// E:
// 8 => [1,4,3]
// 13 => [1,7,5]
// 10 => [2,5,3]

// PS:
// write a function racePodium that takes an input of blocks which is a single number
// declare variables for first second and third
  // first will store blocks divided by 3
  // second will store first minus 1
  // third will store blocks minus first and second
function racePodium(blocks) {
  // your code here
  let first = Math.ceil(blocks/3)+1;
  let second = first - 1;
  let third = blocks-first-second;
  if (third == 0) {
    third = 1
    second -= 1
  }
  return [second,first,third]
}
console.log(racePodium(11))