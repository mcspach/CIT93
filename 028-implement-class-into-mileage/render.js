import { saveDataLocal } from './storage.js';
import { calculateAvg } from './handleForm.js';

/* Global const for updating DOM elements by their id */
const ERR = document.getElementById('err');
const FORM = document.getElementById('form-input');
const TBL_OUTPUT = document.getElementById('table-output');
const AVG_OUTPUT_1 = document.getElementById('output-mpg');
const AVG_OUTPUT_2 = document.getElementById('output-cost');

function renderTableHeadings() {
  const tr = document.createElement('tr');
  let headings = ['Miles Driven', 'Gallons Used', 'Price', 'Trip MPG', 'Trip Cost', 'Edit/Delete'];
  headings.forEach((heading) => {
    let th = document.createElement('th');
    th.textContent = heading;
    tr.appendChild(th);
  });
  let tbl = document.createElement('table');
  tbl.appendChild(tr);
  return tbl;
}

function renderEditDeleteBtn(MY_DATA, index) {
  const buttonTD = document.createElement('td');
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.dataset.index = index;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  editBtn.dataset.index = index;
  // add event listener for each button click
  // click delete: find the right object. delete it.
  deleteBtn.addEventListener('click', () => {
    MY_DATA.splice(index, 1);
    renderTable(MY_DATA);
    calculateAvg(MY_DATA);
  });
  // click edit: put the vlues into the unpit feilds, then the next submit will trigger an update rather than a new data set.
  editBtn.addEventListener('click', function () {
    const data = MY_DATA[index];
    FORM.miles.value = data.miles;
    FORM.gallons.value = data.gallons;
    FORM.price.value = data.price;
    console.log(FORM);
    MY_DATA.splice(index, 1);
    //disable buttons in table
    const formButtons = TBL_OUTPUT.querySelectorAll('button');
    formButtons.forEach(function (btn) {
      btn.disabled = true;
    });
    saveDataLocal(MY_DATA);
  });
  buttonTD.appendChild(editBtn);
  buttonTD.appendChild(deleteBtn);
  return buttonTD;
}

function clearAverages() {
  AVG_OUTPUT_1.innerHTML = '';
  AVG_OUTPUT_2.innerHTML = '';
}

function renderTable(MY_DATA) {
  TBL_OUTPUT.innerHTML = '';
  if (MY_DATA.length === 0) {
    clearAverages();
  } else {
    const tbl = renderTableHeadings();
    MY_DATA.forEach((obj, index) => {
      const tr = document.createElement('tr');
      for (const key in obj) {
        let td = document.createElement('td');
        td.textContent = obj[key];
        tr.appendChild(td);
      }
      const buttonTD = renderEditDeleteBtn(MY_DATA, index);
      tr.appendChild(buttonTD);
      tbl.appendChild(tr);
    });
    TBL_OUTPUT.appendChild(tbl);
  }
}

export { renderTable, ERR, FORM, AVG_OUTPUT_1, AVG_OUTPUT_2, TBL_OUTPUT, clearAverages };