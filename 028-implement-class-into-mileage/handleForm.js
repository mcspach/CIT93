import { Trip } from './trip.js';
import { ERR, TBL_OUTPUT, clearAverages } from './render.js';

function updateDOM(input, id) {
  const divEl = document.querySelector(id);
  const p = document.createElement('p');
  p.textContent = input;
  divEl.appendChild(p);
};

function trackMPGandCost(miles, gallons, price) {
  const MPG = Number((miles / gallons).toFixed(2));
  const tripCost = Number((gallons * price).toFixed(2));
  //enable buttons in table
  const formButtons = TBL_OUTPUT.querySelectorAll('button');
  formButtons.forEach(function (btn) {
    btn.disabled = false;
  });
  return {
    miles: miles,
    gallons: gallons,
    price: price,
    MPG: MPG,
    tripCost: tripCost,
  };
}

function calculateAvg(MY_DATA) {
  clearAverages();
  const numberOfObj = MY_DATA.length;
  // let sumMPG = 0;
  // let sumTripCost = 0;
  // MY_DATA.forEach(obj => {
  //   sumMPG += obj.MPG;
  //   sumTripCost += obj.tripCost;
  // });
  const sums = MY_DATA.reduce(function (sum, obj) {
    return {
      _MPG: sum._MPG + obj._MPG,
      _tripCost: sum._tripCost + obj._tripCost
    };
  });
  const avgMPG = Number((sums._MPG / numberOfObj).toFixed(2));
  const avgTripCost = Number((sums._tripCost / numberOfObj).toFixed(2));
  updateDOM(`Average MPG is ${avgMPG}`, '#output-mpg');
  updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-cost');
}

function isFormValid(miles, gallons, price) {
  const errMsg = [];
  if (miles === 0 || gallons === 0 || price === 0) {
    errMsg.push('Make sure your input value greater than 0!, Try Again');
  }
  if (price > 1000) {
    errMsg.push('Really!? I think this is in error... Try again');
  }
  if (errMsg.length > 0) {
    ERR.textContent = errMsg;
    return false;
  } else {
    return true;
  }
}

export { isFormValid, calculateAvg, trackMPGandCost };