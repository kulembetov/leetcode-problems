import { sockMerchant } from './map';

describe('sockMerchant', () => {
  it('should return how many pairs of socks with matching colors they are', () => {
    const arr = [1, 1, 2, 3, 3];
    expect(sockMerchant(arr)).toBe(2);
  });

  it('should return zero pairs of socks for an empty array', () => {
    expect(sockMerchant([])).toBe(0);
  });

  it('should return how many pairs of socks with matching colors they are for a large array', () => {
    const arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 4];
    expect(sockMerchant(arr)).toBe(7);
  });
});
