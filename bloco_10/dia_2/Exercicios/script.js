// Exercicio 01
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// Exercicio 02 e 03
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

// Exercicio 04
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// Exercicio 05
// Ver arquivo script.test.js

// Exercicio 06
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = async (name) => {
  try {
    let result = Animals.find((elm) => elm.name === name)
    if (result) return result // como a função é sincrona é necessario o IF
    throw 'Nenhum animal com esse nome!' // throw cria uma mensagem personalizada de erro e "ativa o Catch"
  }
  catch (error) { // catch recebe um parametro definido pelo throw
    throw error   // throw "imprimi" a mensagem personalizada
  }
}

const getAnimal = (name) => {
  return findAnimalByName(name)
};


module.exports = {
  uppercase,
  findUserById,
  getUserName,
  getRepos,
  getAnimal,
};