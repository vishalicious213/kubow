// Using an array method, write a function that returns the string elements of an array that have a given length or larger.
// eg: getWords(['Florida', 'dog', 'phone', 5]) => ['Florida', 'phone']

const wordsArray = ['Florida', 'dog', 'phone']
const number = 5

function getWords(words, length) {
    let newWords = []

    words.map(word => {
        if (word.length >= length) {
            newWords.push(word)
        }
    })

    return(newWords)
}

console.log(getWords(wordsArray, number))


// UPER
// take in the array and number
// for each word in the array, check if word.length >= number
// make new array with words that pass test
// return new array