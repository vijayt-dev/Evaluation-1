/*
18. Write a program in Javascript to make such a pattern like a pyramid with numbers
increased by 1
   1
  2 3
 4 5 6
7 8 9 10
*/

const ROW_COUNT = 4
let increment = 0
let spaceCount = ROW_COUNT
for(let row = 1; row <= ROW_COUNT; row++){
    let value = ""
    spaceCount--
    let spaces = " ".repeat(spaceCount)
    value += spaces
    for(let column = 1; column <= row; column++){
        value += ++increment + " "
    }
    console.log(value)
}
