// import { KEY } from 'key.js';
// I thought the object would look something like this, but it didn't work. 
// THe error says I didn't provide an API key.
const options = {
  "Content-Type": "application / json",
  "Authorization": "Bearer sk- j4pDC9epHL3x2IjrlgLXT3BlbkFJvkWbu0km9ypoCpkYNf3D",
  "model": "gpt-3.5-turbo",
  "messages": [{ "role": "user", "content": "Hello! Say something." }]
};

fetch('https://api.openai.com/v1/chat/completions', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err));

sk - j4pDC9epHL3x2IjrlgLXT3BlbkFJvkWbu0km9ypoCpkYNf3D;