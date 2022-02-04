// Using `some` write a function that checks an array for a `falsey` value.
// eg: checkForFalsey([11, Nan, [], 'Angels']) => true

let values = [11, NaN, [], 'Angels'] // NaN is falsey
// let values = [11, 1, [], 'Angels'] // removed NaN to test

// FIRST SOLUTION

// function checkForFalsey(arr) {
//     return arr.some(value => value == false)
// }

// console.log(checkForFalsey(values))
// // true


// SECOND SOLUTION

function checkForFalsey(arr) {
    return arr.some(value => !value)
}

console.log(checkForFalsey(values))
// true