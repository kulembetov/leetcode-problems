import { longestIncreasingSubsequence } from './binary';

describe('longest-increasing-subsequence', () => {
  test('typical numbers', () => {
    expect(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  test('empty array', () => {
    expect(longestIncreasingSubsequence([])).toBe(0);
  });

  test('single element', () => {
    expect(longestIncreasingSubsequence([1])).toBe(1);
  });

  test('same elements', () => {
    expect(longestIncreasingSubsequence([1, 1, 1, 1, 1])).toBe(1);
  });
});
