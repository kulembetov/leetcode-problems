// time complexity: O(n log n) due to sorting
// space complexity: O(1) or O(n) depending on the sorting algorithm implementation

const longestConsecutiveArray = (nums: number[]): number => {
  // edge case: if array is empty, return 0
  if (nums.length === 0) return 0;

  // sort the array to bring consecutive elements together
  const sortedArray: number[] = nums.sort((a: number, b: number): number => a - b);
  // to store the length of the longest sequence found
  let max: number = 0;
  // to store the length of the current sequence
  let currentMax: number = 1;

  // iterate through the sorted array to find consecutive sequences
  for (let i = 0; i < sortedArray.length - 1; i++) {
      // if current element and next element form a consecutive sequence, increment currentMax
      if (sortedArray[i] + 1 === sortedArray[i + 1]) {
          currentMax++;
      // if current element and next element are not consecutive and not equal, update max and reset currentMax
      } else if (sortedArray[i] !== sortedArray[i + 1]) {
          max = Math.max(max, currentMax);
          currentMax = 1;
      }
  }

  // return the maximum of max and currentMax to handle the case where the longest sequence ends at the last element
  return Math.max(max, currentMax);
};