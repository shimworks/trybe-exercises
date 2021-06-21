const { searchEmployee } = require('./parte2');

describe('testa searchEmployee', () => {
  it('teste se é uma função', () => {
    expect(typeof searchEmployee).toBe('function')
  })
  it('testa Se o ID passado tem firstName do mesmo Objeto da ID', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  })
  it('testa Se o ID passado tem lastName do mesmo Objeto da ID', () => {
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
  })
  it('testa Se o ID passado tem specialities do mesmo Objeto da ID', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  })
  it('testa se a mensagem de erro, caso o detail nao existir', () => {
    expect(() => { searchEmployee('1256-4', 'Negasaver') }).toThrow(new Error('Informação indisponível'));
  })
  it('testa se a mensagem de erro, caso o ID nao existir', () => {
    expect(() => { searchEmployee('1256-5') }).toThrow(new Error('ID não identificada'));
  })
})