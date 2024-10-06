// time complexity: O(n), where n is the number of elements in the input array
// space complexity: O(n) due to the additional storage used by the set

const longestConsecutiveSet = (nums: number[]): number => {
  const numSet: Set<number> = new Set(nums);
  let longest: number = 0;

  for (let n of nums) {
    if (!numSet.has(n - 1)) {
      let length = 0;

      while (numSet.has(n + length)) {
        length += 1;
      }

      longest = Math.max(length, longest);
    }
  }

  return longest;
};
