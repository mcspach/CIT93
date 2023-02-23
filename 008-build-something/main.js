//Updating the DOM

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const h2 = document.createElement('h2')
    h2.textContent = `Total cost per mile for my car is ${input}`
    divEl.appendChild(h2)
}

// I dont understand why we are multiplying the mpg  by the price, what is that return value representing?
// I changed it to deviding the price by mpg to show cost per mile.
const mileage = (miles, gallons = 10, price = 4.0) => updateDOM(price/(miles/gallons))

const myMPG = mileage(300, 10, 4.50)
// updateDOM(100)


