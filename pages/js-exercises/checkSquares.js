//  Using 'every' write a function that checks whether every number in an array is a square number
//  eg: checkSquares([9, 16, 81]) => true

const nums = [9, 16, 81] // will return true
// const nums = [9, 16, 81, 7] // will return false b/c 7 is not a perfect square

function checkSquares(arr) {
    return arr.every(num => Math.sqrt(num) % 1 === 0)
}

console.log(checkSquares(nums))
// true

// Math.sqrt returns the square root of a number
// We check to see if the square root has a remainder (divide by 1)
// If there's no remainder, its a square - check if all have no remainder