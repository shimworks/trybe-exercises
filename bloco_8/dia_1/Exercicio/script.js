// // requisito 01
// const criaEmail = (nome) => {
//   const email = nome.toLowerCase().replace(' ', '_');
//   let pessoa = {
//     nomeCompleto: nome,
//     email: `${email}@trybe.com`,
//   };
//   return pessoa;
// }

// const newEmployees = (func) => {
//   const employees = {
//     id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(criaEmail));

// // requisito 02
// const numberChecker = (myNumber, sorteio) => myNumber === sorteio;

// const rng = (myNumber, func) => {
//   const sorteio = Math.round(Math.random()*5)
//   return func(myNumber, sorteio) ? 'Lucky day, you won!' : 'Try Again';
// }

// console.log(rng(2, numberChecker));

// requisito 03
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const HOF = (certo, aluno, action) => {
  let contador = 0;
  for (let index = 0; index < certo.length; index += 1) {
    const actionRun = action(certo[index], aluno[index]);
    contador += actionRun;
  }
  return `Resultado final: ${contador} corretas`;
};

const chama = (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return -0.5
  }
  return -0.5;
};

console.log(HOF(rightAnswers, studentAnswers, chama))
