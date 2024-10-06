// time complexity: O(n log n) due to sorting
// space complexity: O(1) or O(n) depending on the sorting algorithm implementation

const longestConsecutiveArray = (nums: number[]): number => {
  if (nums.length === 0) return 0;

  const sortedArr = nums.sort((a, b) => a - b);

  let maxLength = 0;
  let currentLength = 1;

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i - 1] + 1) {
      currentLength++;
    } else if (sortedArr[i] !== sortedArr[i - 1]) {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }

  return Math.max(maxLength, currentLength);
};
