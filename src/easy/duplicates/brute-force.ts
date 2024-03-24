// time complexity: O(n^2), iterate through the array with nested loops
// space complexity: O(1), no additional space needed

const findDuplicatesBruteForce = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; i < nums.length; i++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
