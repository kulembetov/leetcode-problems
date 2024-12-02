import { moveZeroes } from './two-pass';

describe('moveZeros', () => {
  test('typical number', () => {
    const nums: number[] = [0, 2, 4, 5, 0, 7];
    moveZeroes(nums);
    expect(nums).toStrictEqual([2, 4, 5, 7, 0, 0]);
  });

  test('empty array', () => {
    const nums: number[] = [];
    moveZeroes(nums);
    expect(nums).toStrictEqual([]);
  });

  test('single element', () => {
    const nums: number[] = [0];
    moveZeroes(nums);
    expect(nums).toStrictEqual([0]);
  });

  test('all zeros', () => {
    const nums: number[] = [0, 0, 0, 0, 0];
    moveZeroes(nums);
    expect(nums).toStrictEqual([0, 0, 0, 0, 0]);
  });
});
