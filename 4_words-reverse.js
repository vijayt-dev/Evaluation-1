/*
 4. How would you reverse words in a sentence?
*/

const sentence = "This is sentence"
const START_INDEX = 0
const END_INDEX = sentence.length
const spaceArr = []
let reverseSentence = ""
if(sentence.length > 0){
    spaceArr.push(START_INDEX)
    for(let i in sentence){
        if(sentence[i] === " "){
            spaceArr.push(Number(i))
        }
    }
    spaceArr.push(END_INDEX)
}
for(let i = spaceArr.length - 1; i >= 0; i--){
    for(let j = spaceArr[i - 1]; j <= spaceArr[i] - 1; j++){
        if(sentence[j] === " ")
            continue
        reverseSentence += sentence[j]
    }
    reverseSentence += " "
}
console.log(reverseSentence)
