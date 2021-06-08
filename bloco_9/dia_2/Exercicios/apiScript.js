// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

async function fetchJoke() {
  const obj = {
    methid: 'GET',
    headers: { 'Accept': 'application/json' },
  };
  
  return fetch(API_URL, obj)
  .then(response => response.json())
  .then(data => text.innerHTML = data.joke);

};
window.onload = () => fetchJoke();

const text = document.createElement('p')
document.getElementById('jokeContainer').appendChild(text)

