import { timeConversion } from './regex';

describe('time conversion', () => {
  it('should convert to and return the military time', () => {
    expect(timeConversion('12:34:56AM')).toBe('00:34:56');
    expect(timeConversion('12:34:56PM')).toBe('12:34:56');
    expect(timeConversion('10:34:56AM')).toBe('10:34:56');
  });

  it('should handle the incorrect time format and throw an error', () => {
    const timeConversion = (timeStr: string) => {
      throw new TypeError('Invalid time format');
    };
    expect(() => timeConversion('10:34:56')).toThrow(TypeError);
    expect(() => timeConversion('10:34:56')).toThrow('Invalid time format');
  });
});
