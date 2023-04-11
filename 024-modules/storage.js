function saveDataLocal(MY_DATA) {
  localStorage.setItem('tripdata', JSON.stringify(MY_DATA));
}
function getTripData() {
  const dataJSON = localStorage.getItem('tripdata');
  if (dataJSON === null) return [];
  return JSON.parse(dataJSON);
}

export { saveDataLocal, getTripData };