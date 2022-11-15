/*
6. Write your own program to explain the difference between forEach and map?
*/

/*
    The map() method return an new array
    The forEach() method does not create a new array based on the
    given array
*/

let arrFor = [1,2,3]
arrFor.forEach(function(value,index,arr){
    value += 1
})
console.log(arrFor)
let arrMap = arrFor.map(function(value,index,arr){
    return value + 1
})
console.log(arrMap)