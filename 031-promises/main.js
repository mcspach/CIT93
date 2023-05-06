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
  .then(onSuccess, onError);