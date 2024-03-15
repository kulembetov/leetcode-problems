// time complexity: 0(n), iterates through the height array exactly once
// space complexity: O(1), due to not requiring additional arrays to store precomputed values

const trap = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      // when the bar at the left pointer is shorter than the one at the right pointer
      if (height[left] > leftMax) {
        // update leftMax if the current bar is taller than the leftMax
        leftMax = height[left];
      } else {
        // calculate trapped water based on leftMax
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      // when the bar at the right pointer is shorter or equal to the one at the left pointer
      if (height[right] > rightMax) {
        // update rightMax if the current bar is taller than the rightMax
        rightMax = height[right];
      } else {
        // calculate trapped water based on rightMax
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }
  return totalWater;
};
