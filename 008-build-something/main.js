//Updating the DOM
text = 'This text was inserted by main.js';
const updateDOM = (text) => {
    const divEl = document.querySelector('#output');
    const p = document.createElement('p');
    p.textContent = text;
    divEl.appendChild(p);
}
updateDOM(text);