const updateDOM = (input, id) => {
    const divEl = document.getElementById(id)
    const h2 = document.createElement('h2')
    h2.textContent = input
    divEl.appendChild(h2)
}

const myArrObjs = [
    { name: 'spork',
    hairColor: 'red'},
    { name: 'johnny'},
    { name: 'winky',
    hairColor: 'black'},
    {hairColor: 'white'}
]

myArrObjs.forEach(obj => {
    const hairColor = obj.hairColor || 'unknown', name = obj.name || 'unknown'
    const string = `Name: ${name}, Hair: ${hairColor}`
    updateDOM(string, 'output')
})