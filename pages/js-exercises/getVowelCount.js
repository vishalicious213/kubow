// Using 'split' and 'filter' write a function that counts the number of vowels in a sentence.
// eg: getVowelCount('In West Philadephia, born and raised') => 12

const sampleSentence = 'In West Philadephia, born and raised'
const vowels = ['a','e','i','o','u','A','E','I','O','U']

function getVowelCount(sentence) {
    return sentence.split('').filter(letter => vowels.includes(letter))
}

console.log(getVowelCount(sampleSentence))


// UPER
// split string into individual letters using empty separator
// filter out the vowels
// count vowels & return count