// time complexity: O(n), as we keep track of all elements
// space complexity: O(n), as we create a dp array to store computed values

export const robWithMemoization = (nums: number[]): number => {
  // handle the case when there are no houses
  if (nums.length === 0) return 0;
  // handle the case when there is only one house
  if (nums.length === 1) return nums[0];
  // handle the case when there are two houses
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // create an array to store the maximum rob amount that can be achieved up to each house
  let dp: number[] = [];
  // the maximum rob amount from the first house is the amount in the first house
  dp[0] = nums[0];
  // the maximum rob amount from the first two houses
  dp[1] = Math.max(nums[0], nums[1]);

  // iterate over the array starting from the third house
  for (let i = 2; i < nums.length; i++) {
    // calculate the maximum money that can be robbed up to the current house
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  // return the maximum amount that can be robbed from all houses
  return dp[nums.length - 1];
};
