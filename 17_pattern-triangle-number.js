/*
17. Write a program in Javascript to make such a pattern like right angle triangle with
number increased by 1
1
2 3
4 5 6
7 8 9 10
*/

let increment = 0
for(let row = 1; row <= 4; row++){
    let value = ""
    for(let column = 1; column <= row; column++){
        value += ++increment + " "
    }
    console.log(value)
}
