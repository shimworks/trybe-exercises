// function criaObj (paraUm, paraDo, paraTr) {

//   paraUm[paraDo] = paraTr;
//   return paraUm;
// }
// let obj = {

// };
// let key = 'chave';
// let value = 'valor';
// console.log(criaObj(obj, key, value));

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom',
// };

// const skills = (student) => {
//   const array = Object.keys(student)
//   for (index in array) {
//     console.log(`${array[index]} Level: ${student[array[index]]}`)
//   }
// }

// skills(student2)

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

// var obj = {a: 5, b: 7, c: 9};
// for (const [key, value] of Object.entries(obj)) {
//     console.log(key, value)
// }

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  name: 'ana',
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)
