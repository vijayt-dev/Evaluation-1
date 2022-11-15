/*
12. Remove duplicate from an array of an object by id and name?
a. [{id: 1, name: ‘Stephen covey’ }, {id: 2, name: ‘Robin Sharma’ }, {id: 3, name:
    ‘Tolstoy’}, {id: 3, name: ‘Tolstoy’}, {id: 5, name: ‘James clear’}]
*/

let arr = [
        {id: 1, name: "Stephen covey"}, 
        {id: 2, name: "Robin Sharma"}, 
        {id: 3, name: "Tolstoy"},
        {id: 3, name: "Tolstoy"}, 
        {id: 5, name: "James clear"}
]

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i]["id"] === arr[j]["id"] && 
        arr[i]["name"] === arr[j]["name"]){
           arr.splice(j,1)
           j--
        }
    }
}
console.log(arr)