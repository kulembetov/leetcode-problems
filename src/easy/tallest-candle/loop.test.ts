import { findTallestCandle } from './loop';

describe('findTallestCandle', () => {
  it('should return the tallest candle', () => {
    expect(findTallestCandle([1, 2, 3, 3])).toBe(2);
    expect(findTallestCandle([5, 5, 6, 7, 7, 8, 8, 8])).toBe(3);
    expect(findTallestCandle([1, 1])).toBe(2);
  });

  it('should return 0 for the empty array', () => {
    expect(findTallestCandle([])).toBe(0);
  });
});
