//GLOBAL OBJECT
const FORM = document.getElementById('hungryForm');
const DATA = {
  hungryForm: document.getElementById('hungryForm'),
  macrosForm: document.getElementById('macrosForm'),
  macros: []
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

function renderMessage(content, id) {
  const divEl = document.getElementById(id);
  const p = document.createElement('p');
  p.innerHTML = content;
  divEl.innerHTML = '';
  divEl.appendChild(p);
}

function updateMacros(fat, carbs, protein) {
  let currentDate = new Date();
  let newMacro = {
    fat: fat,
    carbs: carbs,
    protein: protein,
    date: currentDate.getDate(),
    time: setTime()
  };
  DATA.macros.push(newMacro);
  renderMacros();
}

function setDailyMacros() {
  let currentDate = new Date();
  return DATA.macros.filter(macro => macro.date === currentDate.getDate());
}

function setTime() {
  let currentDate = new Date();
  //if current date is not the same as previous update, bring macros down to zero and save date in macros object.
  return currentDate.getHours() + ":" + currentDate.getMinutes();
}

const decisionMaker = (hungerLevel) => {
  let macros = setDailyMacros();
  let time = setTime();
  if (time >= "11:00" && time <= "21:00") {
    if (hungerLevel > 5) {
      if (macros.fat < macros.carbs && macros.protein < macros.carbs) {
        renderMessage(`Good job today.You can eat anything you want.`, `output`);
      } else if (macros.fat > macros.protein) {
        renderMessage(`Go eat something high in protein.`, `output`);
        } else {
        renderMessage(`Go eat something high in fat.`, `output`);
        }
    } else {
      renderMessage(`Wait until you're hungry to eat`, `output`);
    }
  } else {
    renderMessage(`It's not munching time. Your interval for eating is 12pm - 9pm.`, `output`);
  }
}

DATA.macrosForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target);
  const fat = Number(e.target.fat.value);
  const carbs = Number(e.target.carbs.value);
  const protein = Number(e.target.protein.value);
  updateMacros(fat, carbs, protein);
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