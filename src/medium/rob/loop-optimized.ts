// time complexity: O(n), as we iterate through all houses
// space complexity: O(1), as we don't create any additional data structures to store values

export const robOptimized = (nums: number[]): number => {
  // handle the case when there are no houses
  if (nums.length === 0) return 0;
  // handle the case when there is only one house
  if (nums.length === 1) return nums[0];
  // handle the case when there are two houses
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // initialize variables to keep track of the maximum money that can be robbed
  let maxRobPrevious = Math.max(nums[0], nums[1]);
  let maxRobBeforePrevious = nums[0];
  let maxRobCurrent = maxRobPrevious;

  // iterate over the array starting from the third house
  for (let i = 2; i < nums.length; i++) {
    // update current max considering the current house and the max before the last house
    maxRobCurrent = Math.max(maxRobPrevious, maxRobBeforePrevious + nums[i]);
    // shift previous values for the next iteration
    maxRobBeforePrevious = maxRobPrevious;
    maxRobPrevious = maxRobCurrent;
  }

  // return the maximum amount that can be robbed from all houses
  return maxRobCurrent;
};
