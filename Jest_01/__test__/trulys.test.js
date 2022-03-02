import { isFalse, isNull, isTrue, isUndefined } from '../trulys';

describe('Pruebas de Nulos', () => {
  test('NULOS', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Pruebas de BOOLEANOS', () => {
  test('deberia ser True', () => {
    expect(isTrue()).toBeTruthy();
  });
  test('deberia de ser False', () => {
    expect(isFalse()).toBeFalsy();
  });
  test('No deberia ser falso', () => {
    expect(isTrue()).not.toBeFalsy();
  });
});

describe('Pruebas de undefined', () => {
  test('deberia ser indefinido', () => {
    expect(isUndefined()).toBeUndefined();
  });
});