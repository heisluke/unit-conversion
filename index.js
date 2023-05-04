/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.querySelector(".input-num")
const convertInput = document.querySelector("#convert")

let meter = document.querySelector(".meter")
let feet = document.querySelector(".feet")
let liter = document.querySelector(".liter")
let gallon = document.querySelector(".gallon")
let kilogram = document.querySelector(".kilogram")
let pound = document.querySelector(".pound")


let toFeet = document.querySelector(".to-feet")
let toMeter = document.querySelector(".to-meter")
let toGallon = document.querySelector(".to-gallon")
let toLiter = document.querySelector(".to-liter")
let toPound = document.querySelector(".to-pound")
let toKilogram = document.querySelector(".to-kilogram")


convertInput.addEventListener("click", function () {
    console.log(userInput.value);

    meter.innerHTML = userInput.value
    toFeet.innerHTML = Number(userInput.value * 3.281).toFixed(3)
    feet.innerHTML = userInput.value
    toMeter.innerHTML = Number(userInput.value / 3.281).toFixed(3)

    liter.innerHTML = userInput.value
    toGallon.innerHTML = Number(userInput.value * 0.264).toFixed(3)
    gallon.innerHTML = userInput.value
    toLiter.innerHTML = Number(userInput.value / 0.264).toFixed(3)

    kilogram.innerHTML = userInput.value
    toPound.innerHTML = Number(userInput.value * 2.204).toFixed(3)
    pound.innerHTML = userInput.value
    toKilogram.innerHTML = Number(userInput.value / 2.204).toFixed(3)
})

