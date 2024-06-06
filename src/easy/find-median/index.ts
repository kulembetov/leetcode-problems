// time complexity: O(logn), as we used the sorting algorithm
// soace complexity: O(n), in space sorting is applied

export const findMedian = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error('Array is empty');
  }

  arr.sort((a, b) => a - b);

  const mid = Math.floor(arr.length % 2);

  if (arr.length % 2 === 0) {
    // if even, average the two middle numbers
    return arr[mid - 1] + arr[mid] / 2;
  } else {
    // if odd, return the middle number
    return arr[mid];
  }
};
