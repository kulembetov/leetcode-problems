// time complexity: O(n^2), due to the nested loops
// space complexity: O(1), the amount of memory doesn't grow with the input size

export const divisibleSumPairs = (arr: number[], k: number): number => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % k === 0) {
        count += 1;
      }
    }
  }
  return count;
};
