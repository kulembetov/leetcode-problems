import { diagonalSum } from './loop';

describe('diagonalSum', () => {
  it('should return the sum of two diagonals', () => {
    const matrix = [
      [2, 5, 6],
      [4, 7, 8],
      [1, 2, 5],
    ];
    expect(diagonalSum(matrix)).toBe(21);
  });

  it('should return the sum of a matrix with all the same numbers', () => {
    const matrix = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ];
    expect(diagonalSum(matrix)).toBe(10);
  });

  it('should return the sum of a matrix with negative numbers', () => {
    const matrix = [
      [-3, -5, -7],
      [-2, -1, -7],
      [-9, -4, -8],
    ];
    expect(diagonalSum(matrix)).toBe(-28);
  });

  it('should return the sum of an empty matrix', () => {
    const matrix = [[]];
    expect(diagonalSum(matrix)).toBe(0);
  });
});
