const assert = require('assert'); // TIP: assert de NODE

describe('inicio de pruebas Mocha --> node', () => {
  it('el elmento NO esta en en array..', () => {
    assert.equal([1, 2, 3, 4].indexOf(5), -1);
  })
});

function file(a, b) {
  return a + b + a;
}