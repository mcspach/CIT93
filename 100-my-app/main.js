//GLOBAL OBJECT
const DATA = {
  macros: {
    fat: 0,
    carbs: 0,
    protein: 0
  }
}

function updateDOM(content, id) {
  const divEl = document.getElementById(id);
  const p = document.createElement('p');
  p.innerHTML = content;
  divEl.appendChild(p);
  console.log(divEl.innerHTML);
}

function setTime() {
  let currentDate = new Date();
  return currentDate.getHours() + ":" + currentDate.getMinutes();
}

const decisionMaker = (hungerLevel) => {
  let time = setTime();
  if (time >= "12:00" && time <= "21:00") {
    if (hungerLevel > 5) {
      if (DATA.macros.fat < DATA.macros.carbs && DATA.macros.protein < DATA.macros.carbs) {
        updateDOM(`Good job today.You can eat anything you want.`, `output`);
      } else if (DATA.macros.fat > DATA.macros.protein) {
        updateDOM(`Go eat something high in protein.`, `output`);
        } else {
        updateDOM(`Go eat something high in fat.`, `output`);
        }
    } else {
      updateDOM(`Wait until you're hungry to eat`, `output`);
    }
  } else {
    updateDOM(`It's not munching time. Your interval for eating is 12pm - 9pm.`, `output`);
  }
}

decisionMaker(6);
