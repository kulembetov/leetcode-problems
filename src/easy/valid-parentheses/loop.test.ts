import { isValidParentheses } from './loop';

describe('isValidParentheses', () => {
  it('should check if a string have brackets closed in the correct order', () => {
    expect(isValidParentheses('()')).toBe(true);
    expect(isValidParentheses('()[]{})')).toBe(false);
    expect(isValidParentheses('(]')).toBe(false);
  });

  it('should handle the empty string', () => {
    expect(isValidParentheses('')).toBe(true);
  });

  it('should return false for strings with only opening brackets', () => {
    expect(isValidParentheses('((((')).toBe(false);
    expect(isValidParentheses('[{')).toBe(false);
  });

  it('should return false for strings with only closing brackets', () => {
    expect(isValidParentheses('))))')).toBe(false);
    expect(isValidParentheses(']}')).toBe(false);
  });

  it('should handle nested structures correctly', () => {
    expect(isValidParentheses('({[]})')).toBe(true);
    expect(isValidParentheses('([{])}')).toBe(false);
  });

  it('should return true for valid complex structures', () => {
    expect(isValidParentheses('{[()()][]}')).toBe(true);
  });

  it('should handle strings with mixed valid and invalid groups', () => {
    expect(isValidParentheses('()[]{}{[()()][]}')).toBe(true);
    expect(isValidParentheses('()[{]}')).toBe(false);
  });

  it('should return false for strings that start with a closing bracket', () => {
    expect(isValidParentheses(')(')).toBe(false);
  });
});
