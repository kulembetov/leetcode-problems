// space complexity: O(n), iterating over the matrix once
// time complexity: O(1), uses a constant amound of space

export const diagonalSum = (matrix: number[][]) => {
  // initialize sum variables for both diagonals
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let length = matrix.length;

  // early return for empty of invalid matrices
  if (length === 0 || matrix[0].length === 0) return 0;

  // loop through the matrix once to calculate the sum of both diagonals
  for (let i = 0; i < length; i++) {
    primaryDiagonal += matrix[i][i];
    secondaryDiagonal += matrix[i][length - i - 1];
  }

  // calculate the sum of two diagonals
  let sum = primaryDiagonal + secondaryDiagonal;

  // adjust for the double-counted center element in matrices with odd dimensions
  if (length % 2 !== 0) {
    sum -= matrix[Math.floor(length / 2)][Math.floor(length / 2)];
  }

  return sum;
};
