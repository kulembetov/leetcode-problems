// time complexity: O(n), iterate through the array once
// space complexity: O(n), for storing elements in a map

const findDuplicatesMap = (nums: number[]): boolean => {
  const seen = new Map();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.set(num, true);
  }
  return false;
};
