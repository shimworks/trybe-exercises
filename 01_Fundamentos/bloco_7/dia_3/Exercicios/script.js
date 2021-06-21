// // 01
// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }
// assert.strictEqual(sum(4, 5), 9);
// assert.strictEqual(sum(0, 0), 0);
// console.log(sum(4, "5"));
// assert.throws(() => { sum(4, "5"); }, new Error('parameters must be numbers'))

// // 02
// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }
// console.log(myRemove([1, 2, 3, 4], 3))
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 4], 'erro no array');
// assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'array é igual');

// const myList = [5, 6, 7, 8];
// myRemove(myList, 5);
// assert.deepStrictEqual(myList, [5, 6, 7, 8]);

// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5),[1, 2, 3, 4], 'erro no array');

// // 04
// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz')

// // 05
// const assert = require('assert');

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// assert.deepStrictEqual(obj1, obj2, 'não é igual');
// assert.notDeepStrictEqual(obj1, obj3);
// assert.notDeepStrictEqual(obj2, obj3);

// Parte 2
// // 01
// const assert = require('assert');
// const addOne = (array) => {
//   let newArray = [];
//   for (key in array) {
//     newArray.push(array[key] + 1);
//   }
//   return newArray
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// // 02
// const assert = require('assert');
// const wordLengths = (word) => {
//   let result = []
//   for (key in word) {
//     result.push(word[key].length);
//   }
//   return result
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// Parte 03
// 01
const assert = require('assert');
const greetPeople = (people) => {
  let greeting = []

  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
console.log(greetPeople(parameter))
assert.deepStrictEqual(greetPeople(parameter), result)