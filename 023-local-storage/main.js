/* Global const for updating DOM elements by their id*/

const FORM = document.getElementById('form-input');
const ERR = document.getElementById('err');
const AVG_OUTPUT_1 = document.getElementById('output-mpg');
const AVG_OUTPUT_2 = document.getElementById('output-cost');
const TBL_OUTPUT = document.getElementById('table-output');

function getTripData() {
    const dataJSON = localStorage.getItem('tripdata');
    if (dataJSON === null) return [];
    return JSON.parse(dataJSON);
}
const MY_DATA = getTripData();
renderTable();

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

function calculateAvg() {
    clearAverages();
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

function renderEditDeleteBtn(index) {
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
        renderTable();
        calculateAvg();
    })
    // click edit: put the vlues into the unpit feilds, then the next submit will trigger an update rather than a new data set.
    editBtn.addEventListener('click', function (e) {
        data = MY_DATA[index];
        FORM.miles.value = data.miles;
        FORM.gallons.value = data.gallons;
        FORM.price.value = data.price;
        console.log(FORM)
        MY_DATA.splice(index, 1)
    });
    buttonTD.appendChild(editBtn);
    buttonTD.appendChild(deleteBtn);
    return buttonTD;
}

function clearAverages() {
    AVG_OUTPUT_1.innerHTML = '';
    AVG_OUTPUT_2.innerHTML = '';
}

function renderTable() {
    TBL_OUTPUT.innerHTML = '';
    if (MY_DATA.length === 0) {
        clearAverages();
    } else {
        const tbl = renderTableHeadings();
        MY_DATA.forEach((obj, index) => {
            const tr = document.createElement('tr');
            for (key in obj) {
                let td = document.createElement('td');
                td.textContent = obj[key];
                tr.appendChild(td);
            }
            const buttonTD = renderEditDeleteBtn(index);
            tr.appendChild(buttonTD);
            tbl.appendChild(tr);
        });
        TBL_OUTPUT.appendChild(tbl);
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
        localStorage.setItem('tripdata', JSON.stringify(MY_DATA));
        // const MY_DATA = getTripData();
        renderTable();
        calculateAvg();
    }
    FORM.reset();
});