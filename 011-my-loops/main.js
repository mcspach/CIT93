//Updating the DOM
const MY_MPG = []
const MY_TRIP_COST = []
const MEASURE = [15, 30, -25, -75, 15]

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const h2 = document.createElement('h2')
    h2.textContent = input
    divEl.appendChild(h2)
}

const calculateSum = (arr) => {
    let sum = 0
    let i = 0

    // does a do-while and a while loop do the exact same thing?

    // arr.forEach(item => sum += item)
    // do { 
    //     sum += arr[i] 
    //     i++
    // } while (i < arr.length)
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

trackMPGCost(450, 20)
trackMPGCost(300, 12, 4.50)
trackMPGCost(600, 30, 3.00)
trackMPGCost(800, 40, 3.30)
calculateAvg()