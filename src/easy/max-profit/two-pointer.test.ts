import maxProfitPointer from './two-pointer';

describe('maxProfitPointer', () => {
  it('should return 0 if there is no transactions', () => {
    expect(maxProfitPointer([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfitPointer([7, 6, 4, 3, 1])).toBe(0);
  });
});
