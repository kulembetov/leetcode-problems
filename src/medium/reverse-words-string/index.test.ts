import { reverseWordsString } from './index';

describe('reverseWordsString()', () => {
  test('typical string', () => {
    expect(reverseWordsString('the sky is blue')).toBe('blue is sky the');
  });

  test('empty string', () => {
    expect(reverseWordsString('')).toBe('');
  });

  test('single word', () => {
    expect(reverseWordsString('word')).toBe('word');
  });

  test('single space', () => {
    expect(reverseWordsString(' ')).toBe('');
  });

  test('multiple spaces', () => {
    expect(reverseWordsString('   ')).toBe('');
  });

  test('multiple spaces and words', () => {
    expect(reverseWordsString('  word  ')).toBe('word');
  });
});
