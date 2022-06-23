const { counter } = require('../modules/counter.js');

describe('Test of counter function', () => {
  test('The value of the first call must be 1', () => {
    expect(counter()).toBe(1);
  });

  test('The value of the second call must be equal to 2', () => {
    expect(counter()).toEqual(2);
  });

  test('The value of the third call must be 3', () => {
    expect(counter()).toBe(3);
  });

  test('The value of the fourth call must be equal to 4', () => {
    expect(counter()).toEqual(4);
  });

  test('The value of the fifth call must be 5', () => {
    expect(counter()).toBe(5);
  });

  test('The value of the sixth call must be less than 7', () => {
    expect(counter()).toBeLessThan(7);
  });

  test('The value of the seventh call must be less than or equal to 7', () => {
    expect(counter()).toBeLessThanOrEqual(7);
  });

  test('The value of the eighth call must be greater than 7', () => {
    expect(counter()).toBeGreaterThan(7);
  });

  test('The value of the ninth call must be greater than or equal to 9', () => {
    expect(counter()).toBeGreaterThanOrEqual(9);
  });
});
