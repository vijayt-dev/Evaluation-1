/*
1. Check prime number?
*/

const number = 6
let count = 0
if(number === 1){
    console.log(`${number} is a not a prime number and composite number`)
}else if( number > 1){
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            count++
        }
    }
    if(count === 2){
        console.log(`${number} is a prime number`)
    }else{
        console.log(`${number} is a not prime number`)
    }
}else{
    console.log(`${number} is a not prime number`)
}







