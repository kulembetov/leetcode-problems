// time complexity: O(n^3), where n is the length of the array
// space complexity: O(1), requires a constant amount of space, regardless of the input size

const countGoodTriplets = (
  arr: number[],
  a: number,
  b: number,
  c: number
): number => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // we use abs to calculate the absolute difference between arr[i] and arr[j]
      // this is needed to check the condition |arr[i] - arr[j]| <= a
      if (Math.abs(arr[i] - arr[j]) > a) continue;
      for (let k = j + 1; k < arr.length; k++) {
        // |arr[j] - arr[k]| and |arr[i] - arr[k]| are within the limits specified by b and c
        if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
          count++;
        }
      }
    }
  }
  return count;
};
