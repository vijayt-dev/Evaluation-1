/*
14. Take a multidimensional array and flat the array?[1,4,2,3,[10,20,20], [100,500,700,600], [2000,1000]]
*/

const multiArray = [1,4,2,3,[10,20,20], [100,500,700,600], [2000,1000]]
const flatArray = multiArray.flat(1)
console.log(flatArray)