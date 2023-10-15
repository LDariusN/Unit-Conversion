const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

convertBtn.addEventListener("click", function (){

    // Transforming the Length

    let numberBox = document.getElementById("number-box").value
    let metersSum = numberBox * 3.281
    let feetSum = numberBox / 3.281
    let lengthTotal = metersSum.toFixed(3)
    let feetTotal = feetSum.toFixed(3)
    length.textContent = `${numberBox} meters = ${lengthTotal} feet | ${numberBox} feet = ${feetTotal}`

    // Transforming the Volume

    let volumeSum = numberBox * 0.264
    let gallonsSum = numberBox / 0.264
    let volumeTotal = volumeSum.toFixed(3)
    let gallonsTotal = gallonsSum.toFixed(3)
    volume.textContent = `${numberBox} liters = ${volumeTotal} gallons | ${numberBox} gallons = ${gallonsTotal}`

    // Transforming the Mass

    let massSum = numberBox * 2.204
    let poundSum = numberBox / 2.204
    let massTotal = massSum.toFixed(3)
    let poundsTotal = poundSum.toFixed(3)
    mass.textContent = `${numberBox} kilos = ${massTotal} pounds | ${numberBox} pounds = ${poundsTotal}`
})
