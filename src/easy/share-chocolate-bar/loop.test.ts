import { shareChocolateBar } from './loop';

describe('shareChocolateBar with Nested Loops', () => {
  it('finds valid segments correctly', () => {
    expect(shareChocolateBar([1, 2, 1, 3, 2], 3, 2)).toBe(2);
    expect(shareChocolateBar([1, 1, 1, 1, 1], 3, 2)).toBe(0);
    expect(shareChocolateBar([4, 5, 4, 5, 5, 3], 9, 2)).toBe(3);
    expect(shareChocolateBar([4, 4, 1, 5, 5, 3], 9, 3)).toBe(1);
    expect(shareChocolateBar([4], 4, 1)).toBe(1);
    expect(shareChocolateBar([], 5, 2)).toBe(0);
  });
});
