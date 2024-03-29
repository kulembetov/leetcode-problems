// time complexity: O(n), iterate through the array once
// space complexity: O(n), as we're using an object to track occurrences

const findDuplicatesObj = (nums: number[]): boolean => {
  const seen: Record<number, boolean> = {};
  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]]) {
      return true;
    }
    seen[nums[i]] = true;
  }
  return false;
};
