import { hasDuplicates } from './index';

describe('hasDuplicates', () => {
  test('should return true if there are duplicates', () => {
    expect(hasDuplicates([1, 2, 3, 1])).toBe(true);
  });

  test('should return false if there are no duplicates', () => {
    expect(hasDuplicates([1, 2, 3, 4])).toBe(false);
  });

  test('should handle an empty array', () => {
    expect(hasDuplicates([])).toBe(false);
  });

  test('should handle a single element', () => {
    expect(hasDuplicates([1])).toBe(false);
  });
})