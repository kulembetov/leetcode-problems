// time complexity: O(n) - because we iterate through the array twice independently, not nested
// space complexity: O(1) - excluding the output array, we only use a fixed amount of extra space

const productExceptSelf = (nums: number[]): number[] => {
  let answer = new Array(nums.length).fill(1);

  // calculate left products for each element
  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // calculate right products and multiply with left products
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return answer;
};
