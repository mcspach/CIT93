//GLOBAL OBJECT
const DATA = {
  hungryForm: document.getElementById('hungryForm'),
  macrosForm: document.getElementById('macrosForm'),
  dailyLog: document.getElementById('log'),
  hungryLog: document.getElementById('hungryLog'),
  macros: [],
  hungryLevels: []
}

function renderMacros() {
  let macros = setDailyMacros();
  let totalFat = 0;
  let totalCarbs = 0;
  let totalProtein = 0;
  macros.forEach(macro => {
    totalFat += macro.fat;
    totalCarbs += macro.carbs;
    totalProtein += macro.protein;
  });
  let divEl = document.getElementById('macros-output');
  let macrosHTML = `
      <p>Fat: ${totalFat}</p>
      <p>Carbs: ${totalCarbs}</p>
      <p>Protein: ${totalProtein}</p>
  `;
  divEl.innerHTML = '';
  divEl.insertAdjacentHTML('beforeend', macrosHTML);
}

function renderMacroLog() {
  DATA.dailyLog.innerHTML = '';
  // Headings
  const tr = document.createElement('tr');
  let headings = ['Fat', 'Protein', 'Carbs', 'Time', 'Actions'];
  headings.forEach((heading) => {
    let th = document.createElement('th');
    th.textContent = heading;
    tr.appendChild(th);
  });
  let tbl = document.createElement('table');
  tbl.appendChild(tr);

  // Data
  let macros = setDailyMacros();

  macros.forEach((obj, index) => {
    const macRow = document.createElement('tr');
    for (key in obj) {
      if (key !== 'date') {
        let td = document.createElement('td');
        td.textContent = obj[key];
        macRow.appendChild(td);
      }
    }
    const buttonTD = renderButtonsMacros(index);
    macRow.appendChild(buttonTD);
    tbl.appendChild(macRow);
  });
  console.log(tbl);
  console.log(DATA.dailyLog);
  DATA.dailyLog.appendChild(tbl);
};

function renderMessage(content, id) {
  const divEl = document.getElementById(id);
  const p = document.createElement('p');
  p.innerHTML = content;
  divEl.innerHTML = '';
  divEl.appendChild(p);
}

function renderHungryLog() {
  DATA.hungryLog.innerHTML = '';
  // Headings
  const tr = document.createElement('tr');
  let headings = ['Time', 'Hunger', 'Message', 'Actions'];
  headings.forEach((heading) => {
    let th = document.createElement('th');
    th.textContent = heading;
    tr.appendChild(th);
  });
  let tbl = document.createElement('table');
  tbl.appendChild(tr);

  // Data
  let levels = DATA.hungryLevels;

  levels.forEach((obj, index) => {
    const hungryRow = document.createElement('tr');
    for (key in obj) {
      if (key !== 'date') {
        let td = document.createElement('td');
        td.textContent = obj[key];
        hungryRow.appendChild(td);
      }
    }
    const buttonTD = renderButtonsHungry(index);
    tr.appendChild(buttonTD);
    tbl.appendChild(hungryRow);
  });
  console.log(tbl);
  console.log(DATA.hungryLevels);
  DATA.hungryLog.appendChild(tbl);
}

function updateMacros(fat, carbs, protein, date, time) {
  let saveDate, saveTime;
  if (date && time) {
    saveDate = date;
    saveTime = time;
  } else {
    saveDate = setDate();
    saveTime = setTime();
  }
  let newMacro = {
    fat: fat,
    protein: protein,
    carbs: carbs,
    date: saveDate,
    time: saveTime
  };
  DATA.macros.push(newMacro);
  renderMacros();
  renderMacroLog();
}

function setDailyMacros() {
  return DATA.macros.filter(macro => macro.date === setDate());
}

function setDate() {
  let currentDate = new Date();
  return currentDate.getMonth() + currentDate.getDate() + ", " + currentDate.getFullYear();
}

function setTime() {
  let currentDate = new Date();
  //if current date is not the same as previous update, bring macros down to zero and save date in macros object.
  return currentDate.getHours() + ":" + currentDate.getMinutes();
}

const decisionMaker = (hungerLevel) => {
  let macros = setDailyMacros();
  let date = setDate();
  let time = setTime();
  let message;
  if (time >= "11:00" && time <= "21:00") {
    if (hungerLevel > 5) {
      if (macros.fat < macros.carbs && macros.protein < macros.carbs) {
        message = `Good job today.You can eat anything you want.`;
      } else if (macros.fat > macros.protein) {
        message = `Go eat something high in protein.`;
        } else {
        message = `Go eat something high in fat.`, `output`;
        }
    } else {
      message = `Wait until you're hungry to eat`, `output`;
    }
  } else {
    message = `It's not munching time. Your interval for eating is 12pm - 9pm.`;
  }
  renderMessage(message, 'output');
  DATA.hungryLevels.push({ time: time, date: date, level: hungerLevel, message: message });
  renderHungryLog();
}

DATA.macrosForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target);
  const fat = Number(e.target.fat.value);
  const carbs = Number(e.target.carbs.value);
  const protein = Number(e.target.protein.value);
  if (e.target.saveDate !== '' && e.target.saveTime !== '') {
    const date = Number(e.target.saveDate.value);
    const time = Number(e.target.saveTime.value);
    updateMacros(fat, carbs, protein, date, time);
  } else {
    updateMacros(fat, carbs, protein);
  }

  DATA.macrosForm.reset();
});

DATA.hungryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const hungryLevel = event.target[0].value;
  console.log(hungryLevel);
  decisionMaker(hungryLevel);
  DATA.hungryForm.reset();
});

//displays today's macros on initial load
renderMacros();


function renderButtonsMacros(index) {
  const buttonTD = document.createElement('td');
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add("btn", "btn-primary");
  editBtn.dataset.index = index;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add("btn", "btn-danger");
  editBtn.dataset.index = index;
  // add event listener for each button click
  // click delete: find the right object. delete it.
  deleteBtn.addEventListener('click', () => {
    DATA.macros.splice(index, 1);
    renderMacros();
    renderMacroLog();
  });
  // click edit: put the vlues into the unpit feilds, 
  // then the next submit will trigger an update rather than a new data set.
  editBtn.addEventListener('click', function (e) {
    let data = DATA.macros[index];
    DATA.macrosForm.fat.value = data.fat;
    DATA.macrosForm.carbs.value = data.carbs;
    DATA.macrosForm.protein.value = data.protein;
    DATA.macrosForm.saveDate.value = data.saveDate;
    DATA.macrosForm.saveTime.value = data.saveTime;
    DATA.macros.splice(index, 1);
    updateMacros(fat, carbs, protein, date, time);
  });
  buttonTD.appendChild(editBtn);
  buttonTD.appendChild(deleteBtn);
  return buttonTD;
}

function renderButtonsHungry(index) {
  const buttonTD = document.createElement('td');
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.dataset.index = index;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add("btn", "btn-danger");
  editBtn.dataset.index = index;
  // add event listener for each button click
  // click delete: find the right object. delete it.
  deleteBtn.addEventListener('click', () => {
    DATA.hungryLevels.splice(index, 1);
    renderHungryLog();
  });
  buttonTD.appendChild(deleteBtn);
  return buttonTD;
}