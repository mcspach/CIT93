let myName = "Matthew";
let age = 109;
let happiness = true;

if ( age === 109 ) console.log('Monkey Time!');

console.log(myName, age, happiness);

const myButton = document.getElementsByTagName('button')[0];
console.log(myButton);

const log = () => {
    document.getElementById('myName').innerHTML = document.getElementById('nameInput').value;
    document.getElementById('age').innerHTML = document.getElementById('ageInput').value;
    let select = document.getElementById('happinessSelect');
    document.getElementById('happiness').innerHTML = select.options[select.selectedIndex].value;
    if ( document.getElementById('age').innerHTML == '31' ) {
        document.getElementById('age').innerHTML = 'Happy Birthday!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
    }
}
myButton.addEventListener(`click`, log);

