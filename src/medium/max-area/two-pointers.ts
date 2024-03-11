// time complexity: O(n), due to iterating over the array once
// space complexity: O(1), as the space used does not depend on the input size
const twoPointers = (heights: number[]): number => {
  // initialize max area as 0
  let result = 0;
  // start pointer
  let head = 0;
  // end pointer
  let tail = heights.length - 1;

  while (head < tail) {
    // current container height is min of two pointers
    const height = Math.min(heights[head], heights[tail]);
    // current container width
    const width = tail - head;

    // update result if current area is bigger
    result = Math.max(result, height * width);

    // move the pointer of the shorter line towards the other line
    heights[head] > heights[tail] ? tail-- : head++;
  }

  // return the maximum area found
  return result;
};

const maxArea = (heights: number[]): number => {
  // maximum area of water the container can hold
  let result = 0;
  // starting from the left end of the array
  let head = 0;
  // starting from the right end of the array
  let tail = heights.length - 1;

  // continue until the two pointers meet
  while (head < tail) {
    // height is determined by the shorter of the two lines
    const height = Math.min(heights[head], heights[tail]);
    // width is the distance between the two pointers
    const width = tail - head;

    // calculate the area and update result if it's greater than the current maximum
    result = Math.max(result, height * width);

    // move the pointer pointing to the shorter line towards the other pointer
    // this is because we hope to find a taller line that may increase the area
    if (heights[head] > heights[tail]) {
      // if the right line is shorter, move it towards the left
      tail--;
    } else {
      // if the left line is shorter, or they are equal, move it towards the right
      head++;
    }
  }

  // return the maximum area found
  return result;
};
