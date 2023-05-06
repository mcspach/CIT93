const formEl = document.getElementById('form');
const output = document.getElementById('output');
let counterDiv;

const updateDOM = (exercise, reps, time) => {
  return new Promise((res, rej) => {
    counterDiv = document.createElement('div');
    counterDiv.classList.add('counter');
    counterDiv.innerHTML = `Do ${exercise} for ${time} minutes. Your goal is ${reps} reps.`;
    output.insertBefore(counterDiv, output.firstChild);
    // for testing purposes, using seconds rather than minutes.
    // let minutes = time * 1000 * 60;
    let minutes = time * 1000;
    setTimeout(() => {
      const li = document.createElement('li');
      li.innerHTML = `
    <strong>${exercise}</strong>
    <span>Reps: ${reps}</span>
    <span>Time: ${time}</span>
  `;
      // output.innerHTML = '';
      output.appendChild(li);
      counterDiv.innerHTML = `${exercise} completed.`;
    }, minutes);
    res(3000);
  });
};

function clearCounter(ms) {
  // clear the counterDiv after a few seconds.
  setTimeout(() => {
    counterDiv.remove();
  }, ms);
}

function onError(err) {
  console.log(err);
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const exercise = e.target.exercise.value;
  const reps = parseInt(e.target.reps.value);
  const time = parseFloat(e.target.time.value);
  formEl.reset();
  updateDOM(exercise, reps, time)
    .then(clearCounter)
    .catch(onError);
});




//EVERYTHING BELOW HERE IS RIO'S CODE

// function updateDOM(message, el) {
//   const newEl = document.createElement(el);
//   newEl.textContent = message;
//   output.appendChild(newEl);
// }

// function startWorkout(exercise, reps, time, fn) {
//   fn(`Start ${exercise} <> Goal is ${reps} reps.`, 'p');
//   setTimeout(() => {
//     fn(`${exercise} completed.`, 'p');
//   }, time * 1000);
// }

// formEl.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const exercise = e.target.exercise.value;
//   const reps = parseInt(e.target.reps.value);
//   const time = parseFloat(e.target.time.value);
//   startWorkout(exercise, reps, time, updateDOM);
//   formEl.reset();
// });