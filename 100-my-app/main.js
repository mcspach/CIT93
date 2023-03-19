//GLOBALS

let currentDate = new Date();
const TIME = currentDate.getHours() + ":" + currentDate.getMinutes();
const HUNGER_LEVEL = 6; //Range 1-10
const MACROS = {
    fat: 0,
    carbs: 0,
    protein: 0
};

function updateDOM(content, id) {
    const divEl = document.getElementById(id);
    const p = document.createElement('p');
    p.innerHTML = content;
    divEl.appendChild(p);
}

if (TIME >= "12:00" && TIME <= "21:00") {
    if (HUNGER_LEVEL > 5) {
        if (MACROS.fat < MACROS.carbs && MACROS.protein < MACROS.carbs) {
            updateDOM(`Good job today.You can eat anything you want.`, `output`);
        } else if (MACROS.fat > MACROS.protein) {
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
