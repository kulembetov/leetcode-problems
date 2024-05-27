import { reverse } from './loop';

describe('reverse function', () => {
  test('should reverse positive numbers', () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(120)).toBe(21);
    expect(reverse(1)).toBe(1);
  });

  test('should reverse negative numbers', () => {
    expect(reverse(-123)).toBe(-321);
    expect(reverse(-120)).toBe(-21);
    expect(reverse(-1)).toBe(-1);
  });

  test('should return 0 for numbers that cause overflow', () => {
    expect(reverse(1534236469)).toBe(0); // overflow case
    expect(reverse(-1534236469)).toBe(0); // overflow case
  });

  test('should return 0 for 0', () => {
    expect(reverse(0)).toBe(0);
  });
});
