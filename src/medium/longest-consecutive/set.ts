// time complexity: O(n), where n is the number of elements in the input array
// space complexity: O(n) due to the additional storage used by the set

const longestConsecutiveSet = (nums: number[]): number => {
  // create a set from the array to eliminate duplicates and allow for O(1) lookups
  const numSet: Set<number> = new Set(nums);
  // to store the length of the longest sequence found
  let longestSreak: number = 0;

  // iterate through the numbers
  for (const num of nums) {
    // if the previous number is not in the set, this could be the start of a sequence
    if (!numSet.has(num - 1)) {
      // start of the current sequence
      let currentNum: number = num;
      // length of the current sequence
      let currentStreak: number = 1;

      // while the next consecutive number is in the set, increment currentNum and currentStreak
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      // update the longest streak found so far
      longestSreak = Math.max(longestSreak, currentStreak);
    }
  }
  // return the longest streak
  return longestSreak;
};
