// Time Complexity: O(n^2) - because we're using two nested loops.
// Space Complexity: O(1) - because we're not using any extra data structures that grow with input size.

const twoSumBruteForce = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}