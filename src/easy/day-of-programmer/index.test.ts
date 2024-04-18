import { dayOfProgrammer } from '.';

describe('dayOfProgrammer', () => {
  it('should correctly print the full date of Day of the Programmer during a year', () => {
    expect(dayOfProgrammer(1912)).toBe('12.09.1912'); // leap year in Julian calendar
    expect(dayOfProgrammer(1922)).toBe('13.09.1922'); // normal year in Gregorian calendar
    expect(dayOfProgrammer(1800)).toBe('12.09.1800'); // leap year in Julian calendar
    expect(dayOfProgrammer(2024)).toBe('12.09.2024'); // leap year in Gregorian calendar
  });
});
