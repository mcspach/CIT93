// const url = "http://worldtimeapi.org/api/timezone/America/Los_Angeles";
// const url = "https:/api.thenewsapi.com/v1/news/top?";
const url = "https://api.spotify.com/v1/artists/123";
const token = "123";

async function getData() {
  const request = new Request(url, {
    headers: { 'Authorization': 'Bearer ' + token }
  });
  try {
    const response = await fetch(request);
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
    } else {
      console.log('Server Error: ' + data.error.message);
    }
  } catch (err) {
    console.log(err);
  }
}

getData();