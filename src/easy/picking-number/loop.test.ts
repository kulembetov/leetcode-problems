import { pickingNumbers } from './loop';

describe('pickingNumbers', () => {
  it('should return the length of the longest subarrays, that meets the criterion', () => {
    expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toBe(3);
    expect(pickingNumbers([1, 1, 1, 1, 1])).toBe(5);
  });

  it('should return 1 if the input array length is 0', () => {
    expect(pickingNumbers([0])).toBe(1);
  });
});
