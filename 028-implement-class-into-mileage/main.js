import { saveDataLocal, getTripData } from './storage.js';
import { renderTable, ERR, FORM, AVG_OUTPUT_1, AVG_OUTPUT_2 } from './render.js';
import { isFormValid, trackMPGandCost, calculateAvg } from './handleForm.js';
import { Trip } from './trip.js';

/* Renders initial table with data from local storage */
const MY_DATA = getTripData();
renderTable(MY_DATA);
if (MY_DATA.length > 0) calculateAvg(MY_DATA);

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const miles = parseFloat(e.target.miles.value);
    const gallons = parseFloat(e.target.gallons.value);
    const price = parseFloat(e.target.price.value);
    const isValid = isFormValid(miles, gallons, price);
    if (isValid) {
        ERR.textContent = '';
        AVG_OUTPUT_1.textContent = '';
        AVG_OUTPUT_2.textContent = '';
        const trip = new Trip(miles, gallons, price);
        MY_DATA.push(trip);
        saveDataLocal(MY_DATA);
        renderTable(MY_DATA);
        calculateAvg(MY_DATA);
    }
    FORM.reset();
});