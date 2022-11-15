/*
Write a program in Javascript to make such a pattern like a pyramid with numbers
increased by 1
   1
  2 3
 4 5 6
7 8 9 10
*/

const ROW_COUNT = 5
let increment = 0
let spaceCount = ROW_COUNT
for(let row = 1; row <= ROW_COUNT; row++){
    let value = ""
    spaceCount--
    let spaces = " ".repeat(spaceCount)
    value += spaces
    for(let column = 0; column < row + row - 1; column++){
            value += "*"
    }
    console.log(value)
}
for(let row = 1; row <= ROW_COUNT; row++){
    let value = ""
    let spaces = " ".repeat(row)
    value += spaces
    for(let column = (ROW_COUNT - row) * 2 - 1; column > 0; column--){
            value += "*"
    }
    console.log(value)
}



