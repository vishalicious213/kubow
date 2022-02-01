// Array work!

// Using 'map' write a function that converts fahrenheit to celcius.
// eg: getCelcius([12, 140, 212, 41]) => [-5, 60, 100, 5]

function getCelcius(fah) {
    let cel = (fah - 32) / 1.8          // do the math
    cel = cel.toFixed(2)                // limit the decimals (converts to string)
    console.log(`${fah}F = ${cel}C`)
}

getCelcius(12)
getCelcius(140)
getCelcius(212)
getCelcius(41)