// Time Complexity: O(n), as we iterate through the array once using a sliding window approach
// Space Complexity: O(1), as we don't have variables that grow with the input

export const maxAverageSubsequence = (nums: number[], k: number): number => {
  let sum = 0;

  if (k === 0 || k > nums.length) {
    return 0;
  }

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }

  return parseFloat((max / k).toFixed(2));
}
