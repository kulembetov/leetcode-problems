import { convertToRanges } from './index';

describe('convertToRanges()', () => {
  test('should return a string of ranges', () => {
    const numbers = [1, 2, 3, 5, 6, 8, 10, 11];
    expect(convertToRanges(numbers)).toBe('1-3, 5-6, 8, 10-11');
  });

  test('zero numbers', () => {
    expect(convertToRanges([0, 0, 0, 0, 0])).toBe('0, 0, 0, 0, 0');
  });

  test('one number', () => {
    expect(convertToRanges([1])).toBe('1');
  });

  test('empty array', () => {
    expect(convertToRanges([])).toBe('');
  });
});
