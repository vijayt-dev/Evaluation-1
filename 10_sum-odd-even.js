/*
10. Write a program to print the sum of the even and odd numbers for a given number? (100)
*/

let even = 0
let odd = 0
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        even += i
    }else{
        odd += i
    }
}
console.log("Even Sum ",even)
console.log("Odd Sum ",odd)