// 01
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

test('testa função sum', () => {
  expect(sum(4, 5)).toBe(9)
  expect(sum(0, 0)).toBe(0)
})

// to.throw verifica se a mensagem é a mesma também
test('testa throw sum', () => {
  expect(() => { sum('a', 'b') }).toThrow(new Error('parameters must be numbers'));
})