/*
Write a program in Javascript to display the pattern like right angle triangle using an
asterisk.The pattern like:
*
**
***
****
*****
*/

for(let row = 1; row <= 5; row++){
    let val = ""
    for(let column = 1; column <= row; column++){
        val += "*"
    }
    console.log(val)
}
