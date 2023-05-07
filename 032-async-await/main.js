// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(46 * 2);
//     }, 1);
//   });
// }

// // the following methods do the exact same thing.

// async function start() {
//   const data = await fetch('https://api.weather.gov/points/36.746841,-119.772591');
//   const result = await data.json();
//   console.log(result);
// }

// async function start2() {
//   fetch('https://api.weather.gov/points/36.746841,-119.772591')
//     .then(data => data.json())
//     .then(result => console.log(result));
// }


// start();
// start2();

// TRY / CATCH

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OOops');
    }, 1);
  });
}

async function start() {
  try {
    const result = await getData();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

async function start2() {
  const result = await getData()
    .catch(error => console.log(error));
  console.log(result);
}
// Above does trigger the catch IF the method rejects, but the rest of the code still runs. 


start();