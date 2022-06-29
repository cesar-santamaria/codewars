/* 
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

const accum = (s) => {
	// your code
  let arr = []
 for (let i = 0; i < s.length; i++) {
 arr.push(format(s[i], i + 1))
 }
 return arr.join("-")
 }

const format = (s, num) => {
 let letter = s.toUpperCase()
while (letter.length !== num) {
 letter += s.toLowerCase()
 }
 return letter
}

console.log(accum("abcd"), "A-Bb-Ccc-Dddd")