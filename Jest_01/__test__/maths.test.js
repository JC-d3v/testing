import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matematicos ', () => {
  test('Prueba de sumas', () => {
    expect(sumar(1, 1)).toBe(2);
  });

  test('Prueba de multiplicar', () => {
    expect(multiplicar(1, 1)).toBe(2);
  });

});
