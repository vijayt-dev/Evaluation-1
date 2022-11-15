/*
13. Compare two objects, If all properties are equal return true or return false?
a. ({id: 1, name: “edison”}, {id: 1, name: “edison”})
b. ({id: 1, name: “edison”}, {id: 2, name: “edison”})
*/

function compObj(obj1,obj2){
    let obj1Prop = Object.getOwnPropertyNames(obj1)
    let obj2Prop = Object.getOwnPropertyNames(obj2)
    if( obj1Prop.length !== obj2Prop.length)
        return false
    for(let obj1Propkey in obj1Prop){
        for(let obj2Propkey in obj2Prop){
            if(obj1Propkey === obj2Propkey){     
                if((obj1Prop[obj1Propkey] !== obj2Prop[obj2Propkey]))
                    return false
                if(obj1[obj1Prop[obj1Propkey]] !== obj2[obj2Prop[obj2Propkey]])
                    return false
            }
            
        }
    }
    return true
}
const cmpObj = compObj({id: 1, name: "edison"}, {id: 1, name: "edison"})
console.log(cmpObj)