// Using `reduce` write a function that will return the total number of characters in an array of strings.
// eg: getTotal(['Rabbit', 'Football', 'Cracking']) => 22

const words = ['Rabbit', 'Football', 'Cracking']

function getTotal(arr) {
    return arr.reduce((total, word) => total + word.length, 0)
}

console.log(getTotal(words))