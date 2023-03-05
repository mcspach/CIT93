//Updating the DOM
const FORM = document.getElementById('form-input');
const MY_MPG = []
const MY_TRIP_COST = []
const ERR = document.getElementById('error');

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const h2 = document.createElement('h2')
    h2.textContent = input
    divEl.appendChild(h2)
}

const calculateSum = (arr) => {
    let sum = 0
    let i = 0
    while (i < arr.length) { 
        sum += arr[i] 
        i++
    } 
    return sum
}

let counter = 1
const trackMPGCost = (miles, gallons, price = 4.0) => {
    const MPG  = Math.floor(miles / gallons)
    const tripCost = Math.floor(gallons * price)
    updateDOM(`Trip ${counter} MPG: ${MPG}, Total Cost: ${tripCost}`)
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
    counter ++
}

const calculateAvg = () => {
    let totalCost = calculateSum(MY_TRIP_COST)
    let totalMPG = calculateSum(MY_MPG)
    let avgMPG = Math.round(totalMPG / MY_MPG.length)
    let avgCost = Math.round(totalCost / MY_TRIP_COST.length)
    updateDOM(`Average Trip Cost = ${ avgCost }. Average Miles per Gallon = ${ avgMPG }.`)
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    let errMsg = []
    let miles = parseInt(e.target.miles.value)
    let gallons = parseInt(e.target.gallons.value)
    let price = parseInt(e.target.price.value)
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Please enter a value greater than zero.')
        ERR.innerHTML = errMsg
    } else {
        errMsg = []
        ERR.innerHTML = errMsg
        trackMPGCost(miles, gallons, price)
        calculateAvg()
    }
})
