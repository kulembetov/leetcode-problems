import { findTimeDifference } from './loop';

describe('findTimeDifference', () => {
  it('should return the number of operations needed to convert current time to correct', () => {
    expect(findTimeDifference('1:45', '4:45')).toBe(3);
    expect(findTimeDifference('2:30', '3:15')).toBe(3);
    expect(findTimeDifference('00:30', '02:45')).toBe(3);
  });

  it('should throw an error when the input string is invalid', () => {
    expect(() => findTimeDifference('12:12:12', '12:12:12')).toThrow(
      'Invalid string format'
    );
    expect(() => findTimeDifference('12:12:12', '12:12:12')).toThrow(Error);
  });
});
