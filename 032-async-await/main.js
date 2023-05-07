function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(46 * 2);
    }, 1);
  });
}

async function start() {
  const result = await getData();
  console.log(result);
}

// async function start2() {
//   getData().then(() => {
//     console.log(result);
//   });
// }

start();
