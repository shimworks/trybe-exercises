const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* // 01
lesson2.turno = 'manhã';
console.log(lesson2);

// 02
const listaKey = (obj) => Object.keys(obj);
console.log(listaKey(lesson1));

// 03
const objSize = (obj) => Object.keys(obj).length;
console.log(objSize(lesson1));

// 04
const listaValue = (obj) => Object.values(obj);
console.log(listaValue(lesson1));
 */
// 05
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// // 06
// const allStudents = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     total += obj[array[index]].numeroEstudantes;
//   }
//   return total
// }
// console.log(allStudents(allLessons));

// // 07
// const valueNum = (obj, num) => {
//   let array = Object.values(obj);
//   return array[num]
// }
// console.log(valueNum(lesson1, 2))

// 08
// const contains = (obj, key, value) => {
//   let array2 = Object.entries(obj);
//   let equal = false;
//   for (index2 in array2){
//     if (key === array2[index2][0] && value === array2[index2][1]) equal = true;
//     return equal;
//   }
// }
// console.log(contains(lesson3, 'materia', 'Matemática'));

// Bonus 01
const matWatch = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if (obj[array[index]].materia === 'Matemática') {
      total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(matWatch(allLessons));

// Bonus 02
const gatherInfo = (obj, name) => {
  const allLessons = [];
  let allStudents = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia);
      allStudents += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudents};
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, gatherInfo(allLessons, name));
  return report
}
console.log(createReport(allLessons, 'Maria Clara'))