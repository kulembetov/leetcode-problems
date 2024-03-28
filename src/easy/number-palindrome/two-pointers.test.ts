import { numberPalindrome } from './two-pointers';

describe('numberPalindrome function', () => {
  it('returns true for palindromic numbers like 121', () => {
    expect(numberPalindrome(121)).toBe(true);
  });

  it('returns true for palindromic numbers like 12321', () => {
    expect(numberPalindrome(12321)).toBe(true);
  });

  it('returns false for non-palindromic numbers like 123', () => {
    expect(numberPalindrome(123)).toBe(false);
  });

  it('returns true for palindromic numbers like 1221', () => {
    expect(numberPalindrome(1221)).toBe(true);
  });

  it('returns false for non-palindromic numbers like 12345', () => {
    expect(numberPalindrome(12345)).toBe(false);
  });
});
