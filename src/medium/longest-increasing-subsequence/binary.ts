// O(n) time complexity is achieved by using a set to store the input array elements
// O(n) space complexity because of the additional storage used by the set

export const longestIncreasingSubsequence = (nums: number[]) => {
  const sub: number[] = [];

  for (const num of nums) {
    let left = 0;
    let right = sub.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (sub[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === sub.length) {
      sub.push(num);
    } else {
      sub[left] = num;
    }
  }

  return sub.length;
};
