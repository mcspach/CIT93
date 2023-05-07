async function getPhotos() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/photos');
    const result = await data.json();
    console.log(result);
    renderPhotos(result);
  } catch (err) {
    console.log(err);
  }
}

function renderPhotos(photos) {
  const photoDiv = document.getElementById('photos');
  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.url;
    img.classList.add('photo');
    photoDiv.appendChild(img);
  });
}

getPhotos();

