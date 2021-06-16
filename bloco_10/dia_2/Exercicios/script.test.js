// Exercicio 01
const { uppercase, findUserById, getUserName, getRepos, getAnimal } = require('./script');

describe('testa uppercase', () => {
  it('deveria transformar para maiusculo', done => {
    uppercase('ababa', (test) => {
      expect(test).toBe('ABABA');
      done();
    })
  })
})

// Exercicios 02 e 03
describe('testa getUserName', () => {
  it('deveria encontrar um usuário', async () => {
    await expect(getUserName(4)).resolves.toBe('Mark')
  });

  it('deveria receber uma mensagem de erro', async () => {
    await expect(getUserName(3)).rejects.toEqual({ error: 'User with ' + 3 + ' not found.' })
  });
})

// Exercicio 04
// describe('testa getRepos', () => {
//   const URL = 'https://api.github.com/orgs/tryber/repos'
//   const array = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator']
//   it('deveria conter os 2 repositorios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', async () => {
//     await expect(getRepos(URL)).resolves.toEqual(expect.arrayContaining(array))
//   })
// })

// Exercicio 05
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

// Exercicio 06
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});