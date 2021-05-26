const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// // 01
// function authorBornIn1947() {
//  return books.find((element) => element.author.birthYear === 1947).author.name;
// }
// assert.strictEqual(authorBornIn1947(), 'Stephen King');

// // 02
// function smallerName() {
//   let nameBook = books[0].name
//   books.forEach((element) => (element.name.length < nameBook.length) ? (nameBook = element.name) : '')
//   return nameBook;
// }
// assert.strictEqual(smallerName(), 'Duna');

// // 03
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   return books.find((element) => element.name.length === 26)
// }
// assert.deepStrictEqual(getNamedBook(), expectedResult);

// // 04
// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

// function booksOrderedByReleaseYearDesc() {
//   return books.sort((a, b) => b.releaseYear - a.releaseYear);
// }
// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

// // 05
// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   return books.every((birth) => birth.author.birthYear > 1899);
// };
// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

// // 06
// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//  return books.some((release) => release.releaseYear > 1979 && release.releaseYear < 1990);
// };
// assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

// 07
const expectedResult = false;

function authorUnique() {
  return books.some((author1) => author1.author.birthYear === books.forEach((author2) => author2.author.birthYear))
}
assert.strictEqual(authorUnique(), expectedResult);