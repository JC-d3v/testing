import { arrayColors, arrayFruits } from '../arrays'

describe('comprobacion de existencias', () => {
  test('contiene una...banana', () => {
    expect(arrayFruits()).toContain('banana')
  });
  test('contiene una...naranja', () => {
    expect(arrayColors()).toContain('naranja')
  });
  test('No contiene... aguacate ', () => {
    expect(arrayFruits()).not.toContain('aguacate');
  });
});

describe('tamaño de arreglo', () => {
  test('cantidad de elementos deberia ser ...7', () => {
    expect(arrayFruits()).toHaveLength(7)
  })
})