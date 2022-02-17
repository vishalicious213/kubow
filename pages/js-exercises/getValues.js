// Using an array method, write a function that converts an array of cm values as strings into an array of numbers
// eg: getValues(['23cm', '5.6cm', '1000cm']) => [23, 5.6, 1000]

const numsCM = ['23cm', '5.6cm', '1000cm']

function getValues(nums) {
    return nums.map(num => parseFloat(num))
}

console.log(getValues(numsCM))


// https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l
// Used #3, parseFloat()