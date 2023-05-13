import { KEY } from 'key.js';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application / json',
    'Authorization': `Bearer ${KEY}`
  },
  body: JSON.stringify({
  "model": "gpt-3.5-turbo",
  "messages": [{ "role": "user", "content": "Hello! Say something." }]
  })
};

fetch('https://api.openai.com/v1/chat/completions', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err));
