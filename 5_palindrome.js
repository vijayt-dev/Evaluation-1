/*
 5. How will you verfiy a word as a palindrome?
*/

const word = "madam"
const isPalindrome = (() => {
    for (let i = 0; i < word.length; i++){
        if(word[i] !== word[word.length - (1 + i)]){
            return `${word} is not a palindrome`
        }
    }
    return `${word} is a palindrome`
})()
console.log(isPalindrome)

