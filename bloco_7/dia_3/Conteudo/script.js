const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('Error: parameter y must not 0');
  return x / y;
}

// assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not 0$/); // OK