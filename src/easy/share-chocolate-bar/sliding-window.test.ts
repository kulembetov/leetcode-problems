import { shareChocolateBarSlidingWindow } from './sliding-window';

describe('shareChocolateBarSlidingWindow', () => {
  it('finds valid segments correctly with sliding window', () => {
    expect(shareChocolateBarSlidingWindow([1, 2, 1, 3, 2], 3, 2)).toBe(2);
    expect(shareChocolateBarSlidingWindow([1, 1, 1, 1, 1], 3, 2)).toBe(0);
    expect(shareChocolateBarSlidingWindow([4, 5, 4, 5, 5, 3], 9, 2)).toBe(3);
    expect(shareChocolateBarSlidingWindow([4], 4, 1)).toBe(1);
    expect(shareChocolateBarSlidingWindow([], 5, 2)).toBe(0);
  });
});
