// Array work!

// Using 'map' write a function that converts fahrenheit to celcius.
// eg: getCelcius([23, 140, 212, 41]) => [-5, 60, 100, 5]

// function getCelcius(fah) {
//     let cel = (fah - 32) / 1.8          // do the math
//     cel = cel.toFixed(2)                // limit the decimals (converts to string)
//     console.log(`${fah}F = ${cel}C`)
// }

// getCelcius(23)
// getCelcius(140)
// getCelcius(212)
// getCelcius(41)

const fahArray = [23, 140, 212, 41]

function getCelcius() {
    const celArray = fahArray.map(temp => 
        (temp - 32) / 1.8)

    console.log(celArray)
}

getCelcius()