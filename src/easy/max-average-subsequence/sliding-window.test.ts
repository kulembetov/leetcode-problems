import { maxAverageSubsequence } from './sliding-window';

describe('max-average-subsequence', () => {
  test('should return the typical case', () => {
    expect(maxAverageSubsequence([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });

  test('when k is greater than the length of the array', () => {
    expect(maxAverageSubsequence([1, 12, -5, -6, 50, 3], 10)).toBe(0);
  });

  test('when k is equal to the length of the array', () => {
    expect(maxAverageSubsequence([1, 12, -5, -6, 50, 3], 6)).toBe(9.17);
  });

  test('when k is equal to 1', () => {
    expect(maxAverageSubsequence([1, 12, -5, -6, 50, 3], 1)).toBe(50);
  });

  test('when k is equal to 0', () => {
    expect(maxAverageSubsequence([1, 12, -5, -6, 50, 3], 0)).toBe(0);
  });
});
