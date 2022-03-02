import { numbers } from '../numbers';

describe('Comparacion de numeros', () => {
  test('mayor que', () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });

  test('mayor o igual que', () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });

  test('menor o igual que', () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4);

  });

  test('numeros flotantes', () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4)
  })
})