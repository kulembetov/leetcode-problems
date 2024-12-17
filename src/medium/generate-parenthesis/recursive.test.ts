import { generateParenthesis } from './recursive';

describe('generateParenthesis', () => {
  test('typical number', () => {
    expect(generateParenthesis(3)).toStrictEqual([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ]);
  });
  test('single element', () => {
    expect(generateParenthesis(1)).toStrictEqual(['()']);
  });
  test('two elements', () => {
    expect(generateParenthesis(2)).toStrictEqual(['(())', '()()']);
  });
  test('four elements', () => {
    expect(generateParenthesis(4)).toStrictEqual([
      '(((())))',
      '((()()))',
      '((())())',
      '((()))()',
      '(()(()))',
      '(()()())',
      '(()())()',
      '(())(())',
      '(())()()',
      '()((()))',
      '()(()())',
      '()(())()',
      '()()(())',
      '()()()()',
    ]);
  });
});
