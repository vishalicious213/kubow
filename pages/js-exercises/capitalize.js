// Using 'split', 'map' and 'join' write a function that capitalizes the first letter of each word in a sentence
// eg: capitalize('the queens gambit') => 'The Queens Gambit'

const sampleSentence = 'the queens gambit'

function capitalize() {
    return sampleSentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
}

console.log(capitalize(sampleSentence))

