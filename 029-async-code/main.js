// let pizza;
// function orderPizza() {
//   console.log('Order pizza');
//   setTimeout(() => {
//     pizza = '🍕';
//     console.log(`${pizza} IS READY`);
//   }, 1000);
//   console.log('Pizza was ordered');
// }
// orderPizza();
// console.log(`Eat ${pizza}`);

function orderPizza(callback) {
  setTimeout(() => {
    const pizza = '🍕';
    callback(pizza);
  }, 1000);
}

function pizzaReady(pizza) {
  console.log(`${pizza} IS READY`);
}

orderPizza(pizzaReady);
console.log(`Call Qoli`);