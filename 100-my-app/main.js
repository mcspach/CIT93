//GLOBAL OBJECT
const FORM = document.getElementById('hungryForm');
const DATA = {
  hungryForm: document.getElementById('hungryForm'),
  macrosForm: document.getElementById('macrosForm'),
  macros: {
    fat: 0,
    carbs: 0,
    protein: 0
  }
}

function renderMacros() {
  const macros = DATA.macros;
  let divEl = document.getElementById('macros-output');
  console.log(divEl);
  let macrosHTML = `
      <p>Fat: ${macros.fat}</p>
      <p>Carbs: ${macros.carbs}</p>
      <p>Protein: ${macros.protein}</p>
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

function updateMacros(newData) {
  fat = parseInt(newData.fat) || 0;
  carbs = parseInt(newData.carbs) || 0;
  protein = parseInt(newData.protein) || 0;
  DATA.macros.fat = DATA.macros.fat + fat;
  DATA.macros.carbs = DATA.macros.carbs + carbs;
  DATA.macros.protein = DATA.macros.protein + protein;
  renderMacros();
}

function setTime() {
  let currentDate = new Date();
  //if current date is not the same as previous update, bring macros down to zero and save date in macros object.
  return currentDate.getHours() + ":" + currentDate.getMinutes();
}

const decisionMaker = (hungerLevel) => {
  let time = setTime();
  if (time >= "11:00" && time <= "21:00") {
    if (hungerLevel > 5) {
      if (DATA.macros.fat < DATA.macros.carbs && DATA.macros.protein < DATA.macros.carbs) {
        renderMessage(`Good job today.You can eat anything you want.`, `output`);
      } else if (DATA.macros.fat > DATA.macros.protein) {
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

DATA.macrosForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  updateMacros(data);
});

DATA.hungryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const hungryLevel = event.target[0].value;
  console.log(hungryLevel);
  decisionMaker(hungryLevel);
});

//displays today's macros on initial load
renderMacros();
// decisionMaker(6);