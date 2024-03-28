import { reverseNumberPalindrome } from './reverse';

describe('reverseNumberPalindrome function', () => {
  it('returns true for palindromic numbers like 121', () => {
    expect(reverseNumberPalindrome(121)).toBe(true);
  });

  it('returns true for palindromic numbers like 12321', () => {
    expect(reverseNumberPalindrome(12321)).toBe(true);
  });

  it('returns false for non-palindromic numbers like 123', () => {
    expect(reverseNumberPalindrome(123)).toBe(false);
  });

  it('returns true for palindromic numbers like 1221', () => {
    expect(reverseNumberPalindrome(1221)).toBe(true);
  });

  it('returns false for non-palindromic numbers like 12345', () => {
    expect(reverseNumberPalindrome(12345)).toBe(false);
  });
});
