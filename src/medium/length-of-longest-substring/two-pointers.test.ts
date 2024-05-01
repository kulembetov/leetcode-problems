import { lengthOfLongestSubstring } from './two-pointers';

describe('lengthOfLongestSubstring', () => {
  it('should return the max length of substring without dublicate charachters', () => {
    expect(lengthOfLongestSubstring('abcdabcd')).toBe(4);
    expect(lengthOfLongestSubstring('abcadef')).toBe(6);
    expect(lengthOfLongestSubstring('aaafffabcdefg')).toBe(7);
  });

  it('should return 0 for the empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('should return 1 for the string with the same charachters', () => {
    expect(lengthOfLongestSubstring('aaaaaaa')).toBe(1);
  });
});
