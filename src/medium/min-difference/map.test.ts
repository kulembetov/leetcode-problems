import { findMinDifference } from './map';

describe('findMinDifference', () => {
  it('should return the minimum time difference', () => {
    expect(findMinDifference(['23:59', '00:00'])).toBe(1);
    expect(findMinDifference(['11:59', '13:00'])).toBe(61);
    expect(findMinDifference(['6:00', '11:30'])).toBe(330);
    expect(findMinDifference(['00:00', '00:00'])).toBe(0);
  });
});
