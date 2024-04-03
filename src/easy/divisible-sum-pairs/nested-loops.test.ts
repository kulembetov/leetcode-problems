import { divisibleSumPairs } from './nested-loops';

describe('divisibleSumPairs', () => {
  it('should return the corrent number of pairs', () => {
    expect(divisibleSumPairs([2, 4, 5, 6, 8], 2)).toBe(6);
    expect(divisibleSumPairs([1, 2, 3, 4, 5], 3)).toBe(4);
    expect(divisibleSumPairs([10, 20, 30, 40, 50], 10)).toBe(10);
  });
});
