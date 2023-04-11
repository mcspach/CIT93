import { saveDataLocal, getTripData } from './storage.js';
import { renderTable, ERR, FORM, AVG_OUTPUT_1, AVG_OUTPUT_2 } from './render.js';
import { isFormValid, trackMPGandCost, calculateAvg } from './handleForm.js';


/* Renders initial table with data from local storage */
const MY_DATA = getTripData();
renderTable(MY_DATA);
calculateAvg(MY_DATA);

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const miles = parseInt(e.target.miles.value);
    const gallons = parseInt(e.target.gallons.value);
    const price = parseInt(e.target.price.value);
    const isValid = isFormValid(miles, gallons, price);
    if (isValid) {
        ERR.textContent = '';
        AVG_OUTPUT_1.textContent = '';
        AVG_OUTPUT_2.textContent = '';
        const dataObj = trackMPGandCost(miles, gallons, price);
        MY_DATA.push(dataObj);
        saveDataLocal(MY_DATA);
        renderTable(MY_DATA);
        calculateAvg(MY_DATA);
    }
    FORM.reset();
});