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
    const MPG  = Math.round(miles / gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Trip ${counter} MPG: ${MPG}, Total Cost: ${tripCost}`)
    MPGArray.push(MPG)
    CostArray.push(tripCost)
    counter ++
}

const calculateAvg = () => {
    // const avgMPG = (myArr[0] + myArr[1]) / 2
    // updateDOM(`Average MPG = ${(MPGArray[0] + MPGArray[1]) / 2}`)
    let total = 0
    for (let i = 0; i < MPGArray.length; i++) { total += MPGArray[i] }
    updateDOM(`Average MPG = ${ total / MPGArray.length }`)
}
   

trackMPGCost(300, 10)
trackMPGCost(450, 20)
trackMPGCost(300, 12)
trackMPGCost(600, 30)
calculateAvg()