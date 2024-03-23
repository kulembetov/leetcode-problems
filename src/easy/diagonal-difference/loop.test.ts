import { diagonalDifference } from './loop';

describe('diagonalDifference', () => {
  it('should return the absolute diagonal difference for the 3x3 matrix', () => {
    const arr = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];
    expect(diagonalDifference(arr)).toBe(15);
  });

  it('should return the absolute diagonal difference for the 1x1 matrix', () => {
    const arr = [[11]];
    expect(diagonalDifference(arr)).toBe(0);
  });

  it('should return the absolute diagonal difference for the even size matrix', () => {
    const arr = [
      [11, 4],
      [4, 6],
    ];
    expect(diagonalDifference(arr)).toBe(9);
  });

  it('should return the absolute diagonal difference for the matrix with negative numbers', () => {
    const arr = [
      [-11, -2, -4],
      [-4, -5, -6],
      [-10, -8, -12],
    ];
    expect(diagonalDifference(arr)).toBe(9);
  });

  it('should return the matrix with only zeros', () => {
    const arr = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(diagonalDifference(arr)).toBe(0);
  });

  it('should return the matrix with all same numbers', () => {
    const arr = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    expect(diagonalDifference(arr)).toBe(0);
  });
});
