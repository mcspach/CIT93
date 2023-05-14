// const url = "http://worldtimeapi.org/api/timezone/America/Los_Angeles";
const url = "https:/api.thenewsapi.com/v1/news/top?";

async function getData() {
  const response = await fetch(url);
  const data = response.json();
  console.log(data);
}

getData();