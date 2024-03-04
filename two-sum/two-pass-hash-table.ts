// Time Complexity: O(n) - because we traverse the list containing n elements exactly twice.
// Space Complexity: O(n) - because the extra space required depends on the number of items stored in the hash table, which stores n elements.

const twoSumTwoPassHashTable = (nums: number[], target: number): number[] => {
  const map: Map<number, number> = new Map();
  nums.forEach((num, i) => map.set(num, i));

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement) && map.get(complement) !== i) {
          return [i, map.get(complement)!];
      }
  }
  return [];
}
