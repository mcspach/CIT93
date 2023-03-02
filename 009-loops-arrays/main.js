//Updating the DOM
let MPGArray = []
let CostArray = []

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const h2 = document.createElement('h2')
    h2.textContent = input
    divEl.appendChild(h2)
}

let counter = 1

const trackMPGCost = (miles, gallons, price = 4.0) => {
    const MPG  = Math.floor(miles / gallons)
    const tripCost = Math.floor(gallons * price)
    updateDOM(`Trip ${counter} MPG: ${MPG}, Total Cost: ${tripCost}`)
    MPGArray.push(MPG)
    CostArray.push(tripCost)
    counter ++
}

const calculateAvg = () => {
    let totalCost = 0
    for (let i = 0; i < CostArray.length; i++) { totalCost += CostArray[i] }
    updateDOM(`Average Trip Cost = ${ Math.round(totalCost / CostArray.length) }`)
}

trackMPGCost(450, 20)
trackMPGCost(300, 12, 4.50)
trackMPGCost(600, 30, 3.00)
calculateAvg()