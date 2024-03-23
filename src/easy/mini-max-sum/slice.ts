// time complexity: O(logn) due to the sorting algorithm
// space complexity: O(1), the amount of memory the function uses doesn't depend on the input size

export const miniMaxSumSlice = (arr: number[]): void => {
  arr.sort((a, b) => a - b);

  const minSum = arr.slice(0, 4).reduce((prev, curr) => prev + curr, 0);
  const maxSum = arr.slice(1).reduce((prev, curr) => prev + curr, 0);

  console.log(minSum, maxSum);
};
