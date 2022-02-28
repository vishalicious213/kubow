// Using 'split', 'map' and 'join' write a function that capitalizes the first letter of each word in a sentence
// eg: capitalize('the queens gambit') => 'The Queens Gambit'

const sampleSentence = 'the queens gambit'

function capitalize() {
    return sampleSentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
}

console.log(capitalize(sampleSentence))

// take in sampleSentence
// split the sentence into words using space as delimiter
// map through resulting array & make new array
    // for each word make new word by:
        // capitalizing first letter (charAt(0)) of word
        // take remaining letters and add them to it (substring(1))
        // join them into a string, use a space as delimiter