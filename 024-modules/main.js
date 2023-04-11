import { saveDataLocal, getTripData } from './storage.js';
import { renderTable, FORM } from './render.js';
/* Global const for updating DOM elements by their id*/

// const FORM = document.getElementById('form-input');
const ERR = document.getElementById('err');
const AVG_OUTPUT_1 = document.getElementById('output-mpg');
const AVG_OUTPUT_2 = document.getElementById('output-cost');
// const TBL_OUTPUT = document.getElementById('table-output');

const MY_DATA = getTripData();
renderTable(MY_DATA);

function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement('p');
    p.textContent = input;
    divEl.appendChild(p);
}

function trackMPGandCost(miles, gallons, price) {
    const MPG = Math.round(miles / gallons);
    const tripCost = Math.round(gallons * price);
    // updateDOM(`Miles per gallon  is ${MPG} and trip cost is ${tripCost}`, '#output');
    return {
        miles: miles,
        gallons: gallons,
        price: price,
        MPG: MPG,
        tripCost: tripCost,
    };
}

function calculateAvg(MY_DATA) {
    // clearAverages();
    AVG_OUTPUT_1.innerHTML = '';
    AVG_OUTPUT_2.innerHTML = '';
    const numberOfObj = MY_DATA.length;
    let sumMPG = 0;
    let sumTripCost = 0;
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG;
        sumTripCost += obj.tripCost;
    });
    const avgMPG = Math.round(sumMPG / numberOfObj);
    const avgTripCost = Math.round(sumTripCost / numberOfObj);
    if (avgMPG > 0) updateDOM(`Average MPG is ${avgMPG}`, '#output-mpg');
    if (avgTripCost > 0) updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-cost');
}

function isFormValid(miles, gallons, price) {
    const errMsg = [];
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure your input value greater than 0!!, Try Again');
    }
    if (price > 1000) {
        errMsg.push('Really!!!?? I think this is in error...Try again');
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg;
        return false;
    } else {
        return true;
    }
}

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