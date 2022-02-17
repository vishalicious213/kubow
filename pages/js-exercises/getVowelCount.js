// Using 'split' and 'filter' write a function that counts the number of vowels in a sentence.
// eg: getVowelCount('In West Philadephia, born and raised') => 12

const sampleSentence = 'In West Philadephia, born and raised'
const vowels = ['a','e','i','o','u','A','E','I','O','U']

function getVowelCount(sentence) {
    return sentence.split('').filter(letter => vowels.includes(letter)).length
    // returns 12
    //return sentence.split('').filter(letter => vowels.includes(letter))
    // returns ["I","e","i","a","e","i","a","o","a","a","i","e"]
}

console.log(getVowelCount(sampleSentence))
// 12


// UPER
// split string into individual letters using empty separator
// filter out the vowels
// count vowels & return count