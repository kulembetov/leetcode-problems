import { maxProfit } from './sliding-window';

describe('maxProfit', () => {
  it('calculates the correct maximum profit for various cases', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    expect(maxProfit([2, 4, 1, 7])).toBe(6);
    expect(maxProfit([])).toBe(0);
  });

  it('returns 0 when there is only one price', () => {
    expect(maxProfit([5])).toBe(0);
  });

  it('returns the maximum profit when buying and selling on the same day is not allowed', () => {
    expect(maxProfit([1, 1, 1, 1, 1])).toBe(0);
    expect(maxProfit([1, 2, 1, 2, 1, 2])).toBe(1);
  });

  it('handles large input efficiently', () => {
    const prices = Array.from({ length: 100000 }, (_, i) => i + 1);
    expect(maxProfit(prices)).toBe(99999);
  });
});
