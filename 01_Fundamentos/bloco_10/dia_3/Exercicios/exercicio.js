const fetch = require ('node-fetch')

function rng() {
  return Math.random()*100
}
function somaAR(call) {
  const rdm = call();
  return rdm * 5
}

async function funBeg() {
  let result = await fetch('https://dog.ceo/api/breeds/image/random')
  result = await result.json()
}

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

module.exports = {
  rng,
  funBeg,
  fetchJoke,
  somaAR,
};

