// functions are fun

function syntaxExample () {
    //code to run
}

function doMath (x, y) {
    return result = {
        multiply: x * y,
        divide: x / y,
        subtract: x - y,
        add: x + y };
    // return result;
}

//call or invoke 
let answers = doMath(10, 4);
console.log(`The function returns an object with 4 answers: ${answers.multiply}, ${answers.divide}, ${answers.add}, ${answers.subtract}`);


// my funtions 
const rand = (x) => {
    num = Math.floor(Math.random() * x);
    console.log(num);
    return num;
}

rand(10);

const flip = (x) => {
    num = Math.floor(Math.random() * x);
    if ( num < Math.floor(x/2) ) { return 'heads' } else { return 'tails'}
}

flip(10);

// Comment 
// I was already using some arrow functions last week. My mistake!
// This was an excellent week, great to practice functions, think about data types and scope.

doMoreMath = (x, y) => x * y

let moreAnswer = doMoreMath(10,20);
console.log(`The function returns the multiplied value: ${moreAnswer}`);