import { findMedian } from './index';

describe('findMedian', () => {
  test('finds the median of an odd-length array', () => {
    expect(findMedian([3, 5, 1, 4, 2])).toBe(3);
  });

  test('finds the median of an even-length array', () => {
    expect(findMedian([3, 5, 1, 4, 2, 6])).toBe(3.5);
  });

  test('throws an error if the array is empty', () => {
    expect(() => findMedian([])).toThrow('Array is empty');
  });

  test('finds the median of a single-element array', () => {
    expect(findMedian([1])).toBe(1);
  });

  test('finds the median of a two-element array', () => {
    expect(findMedian([1, 2])).toBe(1.5);
  });
});
