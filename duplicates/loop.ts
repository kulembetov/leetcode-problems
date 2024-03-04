// Time Complexity: O(n log n), due to the sorting algorithm
// Space Complexity: O(n), due to Timsort's use in modern JavaScript engines, that is a merge sort variant that needs additional space to temporarily store elements being merged

const findDuplicates = (nums: number[]): boolean => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
