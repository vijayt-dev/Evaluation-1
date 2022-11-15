/*
 8. Remove duplicate from the following array?
*/

let arr = [1,2,9,4,5,8,3,5,1,4,5]

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] === arr[j]){
          arr.splice(j,1)
          j--
        }
    }
}
console.log(arr)


