import { isPalindrome } from './two-pointers';

describe('isPalindrome', () => {
  it('should handle a palindrome', () => {
    const s: string = 'mom';
    expect(isPalindrome(s)).toBe(true);
  });

  it('should handle an empty string', () => {
    const s: string = '';
    expect(isPalindrome(s)).toBe(true);
  });

  it('should reject a non palindrome', () => {
    const s: string = 'cat';
    expect(isPalindrome(s)).toBe(false);
  });

  it('should process a numeric palindrome', () => {
    const s: string = '12321';
    expect(isPalindrome(s)).toBe(true);
  });

  it('should handle a complex palindrome', () => {
    const s: string = 'A man, a plan, a canal: Panama';
    expect(isPalindrome(s)).toBe(true);
  });
});
