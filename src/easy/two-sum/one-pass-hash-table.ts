// time complexity: O(n) - because we traverse the list containing n elements only once
// space complexity: O(n) - because the extra space required depends on the number of items stored in the hash table, which stores at most n elements

const twoSumOnePassHashTable = (nums: number[], target: number): number[] => {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement)!, i];
      }
      map.set(nums[i], i);
  }
  return [];
}
