// space complexity: O(n), due to the iteration the input array once
// time complexity: O(1), there are no variables which size depends on the input array size

export const diagonalDifference = (arr: number[][]): number => {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][length - i - 1];
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
};
