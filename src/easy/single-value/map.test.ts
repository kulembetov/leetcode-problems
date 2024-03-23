import { singleNumber } from './map';

describe('singleNumber', () => {
  it('should return the number that appears only once', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber([4, 1, 2, 1, 1])).toBe(4);
    expect(singleNumber([0, 1, 0])).toBe(1);
  });

  it('should return 0 for an empty array', () => {
    expect(singleNumber([])).toBe(0);
  });
});
