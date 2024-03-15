// time complexity: O(n), because it iterates through the height array three times: once to fill leftMax, once to fill rightMax, and once more to compute the total water trapped
// space complexity: O(n),  due to the additional space required for the leftMax and rightMax arrays that store the maximum heights to the left and right of each bar

const trapArray = (height: number[]): number => {
  // get the number of bars in the elevation map
  const n: number = height.length;

  // initialize total trapped water
  let totalWater: number = 0;

  // initialize array to store max height to the left of each bar
  let leftMax = new Array(n);

  // initialize array to store max height to the right of each bar
  let rightMax = new Array(n);

  // first bar has no left bars, so max height to its left is its own height
  leftMax[0] = height[0];

  // fill leftMax array
  for (let i = 1; i < n; i++) {
    // current bar's max height to the left is the max of its own height and the max height to the left of the previous bar
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  // last bar has no right bars, so max height to its right is its own height
  rightMax[n - 1] = height[n - 1];

  // fill rightMax array
  for (let i = n - 2; i >= 0; i--) {
    // current bar's max height to the right is the max of its own height and the max height to the right of the next bar
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  // calculate the total water trapped
  for (let i = 0; i < n; i++) {
    // water trapped on current bar is the min of max heights to its left and right, minus its own height
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  // return the total trapped water
  return totalWater;
};
