const formEl = document.getElementById('form');
const output = document.getElementById('output');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const exercise = e.target.exercise.value;
  const reps = parseInt(e.target.reps.value);
  const time = parseFloat(e.target.time.value);
  formEl.reset();
});