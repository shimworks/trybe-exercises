// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  if (id) {
    const searchByID = professionalBoard.find((elm) => elm.id === id);
   if (!searchByID) {
    throw new Error ('ID não identificada');
   }
   if (!searchByID[detail]) {
     throw new Error ('Informação indisponível');
    }
    return searchByID[detail];
  }
};

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