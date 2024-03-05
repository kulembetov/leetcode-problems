// Time Complexity: O(n log n) - mainly due to the sort operation. The two-pointer traversal itself is O(n), but sorting takes precedence in complexity.
// Space Complexity: O(1) or O(n) - depending on the sorting implementation, it might require O(1) (in-place sort) or O(n) (not in-place) extra space.

const twoSumTwoPointers = (nums: number[], target: number): number[] => {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
          return [left, right];
      } else if (sum < target) {
          left++;
      } else {
          right--;
      }
  }
  return [];
}
