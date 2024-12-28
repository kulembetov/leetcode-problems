import { range } from './index';

describe('range', () => {
  test('typical case', () => {
    expect(range(1, 5, 1)).toEqual([1, 2, 3, 4]);
  });
  test('negative step', () => {
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2]);
  });
  test('step is zero', () => {
    expect(range(1, 5, 0)).toEqual([]);
  });
  test('empty range', () => {
    expect(range(1, 1, 1)).toEqual([]);
  });
});
