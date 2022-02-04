// Array work!

// Using 'map' write a function that converts fahrenheit to celcius.
// eg: getCelcius([23, 140, 212, 41]) => [-5, 60, 100, 5]

// FIRST SOLUTION (didn't use map)

// function getCelcius(fah) {
//     let cel = (fah - 32) / 1.8          // do the math
//     cel = cel.toFixed(2)                // limit the decimals (converts to string)
//     console.log(`${fah}F = ${cel}C`)
// }

// getCelcius(23)
// getCelcius(140)
// getCelcius(212)
// getCelcius(41)

// SECOND SOLUTION (used map)

// const fahArray = [23, 140, 212, 41]

// function getCelcius() {
//     const celArray = fahArray.map(temp => 
//         (temp - 32) / 1.8)

//     console.log(celArray)
// }

// getCelcius()

// THIRD SOLUTION (used map & return)

const fahArray = [23, 140, 212, 41]

function getCelcius() {
    return fahArray.map(temp => (temp - 32) / 1.8)
}

console.log(getCelcius())