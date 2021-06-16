const fetch = require ('node-fetch')

function rng() {
  return Math.random()*100
}

async function funBeg() {
  let result = await fetch('https://dog.ceo/api/breeds/image/random')
  result = await result.json()
}

module.exports = {
  rng,
  funBeg,
};

