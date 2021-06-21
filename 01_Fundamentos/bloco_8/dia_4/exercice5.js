const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, cur) => acc + cur.split('').reduce((ac2, cu2) => {
    if (cu2 === 'a' || cu2 ==='A') return ac2 + 1;
    return ac2;
  },0),0);
}
assert.deepStrictEqual(containsA(), 20);