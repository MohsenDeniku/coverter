const inputEl = document.getElementById('input-num')
const convertBtnEl = document.getElementById('convert-btn')

/*
HTML Conversion Elements (p tags)
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

convertBtnEl.addEventListener('click', function() {
  console.log('clicked')
  let metersToFeet = inputEl.value * 3.281
  let feetToMeters = inputEl.value / 3.281

  let litersToGallons = inputEl.value * 0.264
  let gallonsToLiters = inputEl.value / 0.264

  let kilosToPounds = inputEl.value * 2.204
  let poundsToKilos = inputEl.value / 2.204

  lengthEl.textContent = `${inputEl.value} meters = ${metersToFeet.toFixed(3)} feet| ${inputEl.value} feet = ${feetToMeters.toFixed(3)}`
  volumeEl.textContent = `${inputEl.value} liters = ${litersToGallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonsToLiters.toFixed(3)} liters`
  massEl.textContent = `${inputEl.value} kilos = ${kilosToPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundsToKilos.toFixed(3)} kilos`
})