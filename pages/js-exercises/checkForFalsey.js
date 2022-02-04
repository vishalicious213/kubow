// Using `some` write a function that checks an array for a `falsey` value.
// eg: checkForFalsey([11, Nan, [], 'Angels']) => true

let values = [11, NaN, [], 'Angels']

function checkForFalsey(arr) {
    return arr.some(value => value == false)
}

console.log(checkForFalsey(values))
// true