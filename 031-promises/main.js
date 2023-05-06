function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Sunny'), 100);
  });
};

function getWeatherIcon(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (data) {
        case 'Sunny': resolve('🌅');
          break;
        case 'Cloudy': resolve('☁️');
          break;
        case 'Snowy': resolve('❄️');
          break;
        default: reject('No icon available');
      }
    }, 100);
  });
}
function onSuccess(data) {
  console.log(`Success: ${data}`);
}
function onError(err) {
  console.log(`Error: ${err}`);
}

getWeather()
  .then(getWeatherIcon)
  .then(onSuccess)
  .catch(onError);


function fun1() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve('404'), 100));
}

function fun2() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve('🥸'), 100));
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(err) {
  console.log(`Error: ${err}`);
}

function onFinally() {
  console.log(`Finally`);
}

fun1()
  .then(fun2, onError)
  .then(onSuccess)
  .catch(onError)
  .finally(onFinally);

function fetchData() {
  return new Promise(function (resolve, reject) {
    fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
      .then(response => response.json())
      .then(data => console.log(data.properties.periods[1].shortForecast));
  });
}

function displayData(weather) {
  console.log(weather);
}

function onError(err) {
  console.log(`Error: ${err}`);
}

fetchData()
  .then(displayData)
  .catch(onError);