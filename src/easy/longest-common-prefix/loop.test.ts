import { longestCommonPrefix } from './loop';

describe('longestCommonPrefix', () => {
  it('should find common prefix for multiple strings', () => {
    expect(longestCommonPrefix(['apple', 'ape', 'april'])).toBe('ap');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });
  it('should return empty string for empty array', () => {
    expect(longestCommonPrefix([])).toBe('');
  });
  it('should return entire string when single element in array', () => {
    expect(longestCommonPrefix(['joy'])).toBe('joy');
  });
});
