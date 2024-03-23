// time complexity: O(n), the total sum calculation and finding the min/max elements each require a pass through the array
// space complexity: O(1), the amount of memory the function uses doesn't depend on the input size

export const miniMaxSum = (arr: number[]): void => {
  const totalSum = arr.reduce((prev, curr) => prev + curr, 0);

  const minElement = Math.min(...arr);
  const maxElement = Math.max(...arr);

  const maxSum = totalSum - minElement;
  const minSum = totalSum - maxElement;

  console.log(minSum, maxSum);
};
