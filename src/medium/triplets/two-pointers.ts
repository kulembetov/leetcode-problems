// time complexity: O(n log n) + 0(n^2), because of using the nested loop and the sorting algorithm
// space complexity: O(n), since we create an array to store the result, that size depends on the initial array size
const threeSum = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // skip duplicate for the first element of the triplet
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // skip duplicates for the second and third elements of the triplet
        while (left < right && nums[left] < nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
