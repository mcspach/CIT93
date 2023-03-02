//Updating the DOM
const FORM = document.getElementById('form-input');
const MY_MPG = []
const MY_TRIP_COST = []

let counter = 0
const updateDOM = (color, size, font) => {
    const divEl = document.getElementById('output')
    const h2 = document.createElement('h2')
    h2.style = `font-size: ${size}px; font-family: ${font}; color: ${color}`
    h2.textContent = `Color: ${color} MPG: ${size}, Font Style: '${font}'`
    divEl.appendChild(h2)
    counter += 1
    const count = document.getElementById('count')
    count.innerHTML = `<h2>Submissions: ${counter}</h2>`
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    updateDOM(e.target.color.value, e.target.size.value, e.target.font.value)
})
