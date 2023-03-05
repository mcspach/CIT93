//Updating the DOM
let program = {
    mainForm: document.getElementById('form-input'),
    MPG: [],
    tripCost: [],
    counter: 1,
    err: document.getElementById('error'),
    divEl:  document.getElementById('output'),
    h2: document.createElement('h2'),
    updateDOM: function (input) {
        this.h2.textContent = input
        this.divEl.appendChild(this.h2)
    },
    calculateSum: function(arr) {
        let sum = 0
        let i = 0
        while (i < arr.length) { 
            sum += arr[i] 
            i++
        } 
        return sum
    },
    calculateAvg: function() {
        let totalCost = program.calculateSum(this.tripCost)
        let totalMPG = program.calculateSum(this.MPG)
        let avgMPG = Math.round(totalMPG / this.MPG.length)
        let avgCost = Math.round(totalCost / this.tripCost.length)
        program.updateDOM(`Average Trip Cost = ${ avgCost }. Average Miles per Gallon = ${ avgMPG }.`)
    },
    trackMPGCost: function (miles, gallons, price = 4.0) {
        const MPG  = Math.floor(miles / gallons)
        const tripCost = Math.floor(gallons * price)
        this.updateDOM(`Trip ${this.counter} MPG: ${MPG}, Total Cost: ${tripCost}`)
        this.MPG.push(MPG)
        this.tripCost.push(tripCost)
        this.counter ++
    }
}

program.mainForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let errMsg = []
    let miles = parseInt(e.target.miles.value)
    let gallons = parseInt(e.target.gallons.value)
    let price = parseInt(e.target.price.value)
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Please enter a value greater than zero.')
        program.err.innerHTML = errMsg
    } else {
        errMsg = []
        program.err.innerHTML = errMsg
        program.trackMPGCost(miles, gallons, price)
        program.calculateAvg()
    }
})
