/*
15. Group by the id of the following array of objects using the Array.reduce method?
[{id: 1, name: ‘edison’ },{id: 2, name: ‘Annand’ },{id: 1, name: ‘edison’ }, {id: 3, name: ‘Vasnath’}]
*/

const arr = [
    {id: 1, name: "edison" },
    {id: 2, name: "Annand" },
    {id: 1, name: "edison" }, 
    {id: 3, name: "Vasnath"}
]
const groupBy = arr.reduce(function(previousValue,currentValue){
    console.log("Previous Value ",previousValue," Current Value ", currentValue)
    let {id} = currentValue
    previousValue[id] =  previousValue[id] ? previousValue[id] : []
    previousValue[id].push(currentValue)
    return previousValue
},{})
console.log(groupBy)