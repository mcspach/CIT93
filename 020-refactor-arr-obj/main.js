let program = {
    mainForm: document.getElementById('form-input'),
    data: [],
    err: document.getElementById('error'),
    divEl:  document.getElementById('output'),
    totalsEl: document.getElementById('average'),
    updateDOM: function (input, output) {
        if (output == 'output') { 
            let h2 = document.createElement('h2')
            h2.textContent = input
            this.divEl.appendChild(h2)
        } else {
            this.totalsEl.innerHTML = input
        }
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
        let costs = []; this.data.forEach(object => costs.push(object.tripCost))
        let MPGs = []; this.data.forEach(object => MPGs.push(object.MPG))
        let avgMPG = Math.round(program.calculateSum(MPGs) / this.data.length)
        let avgCost = Math.round(program.calculateSum(costs) / this.data.length)
        program.updateDOM(`Average Trip Cost = ${ avgCost }. Average Miles per Gallon = ${ avgMPG }.`, `not output`)
    },
    trackMPGCost: function (miles, gallons, price = 4.0) {
        const MPG  = Math.floor(miles / gallons)
        const tripCost = Math.floor(gallons * price)
        this.data.push({
            miles: miles,
            gallons: gallons,
            price: price,
            MPG: MPG,
            tripCost: tripCost
        });
        this.updateDOM(`Trip ${this.data.length} MPG: ${MPG}, Total Cost: ${tripCost}`, `output`)
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
        errMsg = []; program.err.innerHTML = errMsg
        program.trackMPGCost(miles, gallons, price)
        program.calculateAvg()
    }
})

// I didn't update the code to match your last video
// because I prefer having all the helper functions in the program object
