//Updating the DOM
text = 'This text was inserted by main.js';
const updateDOM = (text) => {
    const divEl = document.getElementById('output');
    const h2 = document.createElement('h2');
    h2.textContent = text;
    divEl.appendChild(h2);
}
updateDOM(text);