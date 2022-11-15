/*
3. How would you reverse a string in JavaScript?
*/

const str = "String"
let reverseString = ""
for(let i = str.length - 1; i >= 0; i--){
    reverseString += str[i]
}
console.log(reverseString)



