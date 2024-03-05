// time Complexity: O(n) due to iterating once to create a set
// space Complexity: O(n) because we're storing the elements in a set

const findDuplicatesSet = (nums: number[]): boolean => {
  const hasDuplicates = new Set(nums).size !== nums.length;
  return hasDuplicates;
};
