//Updating the DOM
let myArr = []

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const h2 = document.createElement('h2')
    const h22 = document.createElement('h2')
    if (typeof input === 'object') {
        h2.textContent = `Total miles per gallon for my car is ${input[0]}. Total trip cost is ${input[1]}.`
    } else {
        h22.textContent = input
    }
    
    divEl.appendChild(h2)
}

// I dont understand why we are multiplying the mpg  by the price, what is that return value representing?
// Nevermind, you answered that ^
// I changed it to deviding the price by mpg to show cost per mile.
const trackMPGCost = (miles, gallons, price = 4.0) => {
    const MPG  = miles / gallons
    const tripCost = gallons * price
    updateDOM(`MPG: ${MPG}, Total Cost: ${tripCost}`)
    myArr.push(MPG, tripCost)
}

const myMPG = trackMPGCost(300, 10)
updateDOM(myArr)


