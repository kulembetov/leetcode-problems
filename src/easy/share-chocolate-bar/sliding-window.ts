// time compelxity: O(n), as we iterate through the array exactly once
// space complexity: O(1), as no additional space proportional to the input size is used

export const shareChocolateBarSlidingWindow = (
  // array of integers representing numbers on each chocolate square
  s: number[],
  // target sum (Ron's birth day)
  d: number,
  // segment length (Ron's birth month)
  m: number
) => {
  // initialize count of valid ways to share the chocolate
  let count = 0;

  // calculate initial sum of the first 'm' squares
  let sum = s.slice(0, m).reduce((a, b) => a + b, 0);

  // check if the initial segment's sum matches the target
  if (sum === d) {
    // increment count if it matches
    count++;
  }

  // iterate through the chocolate bar starting from the second possible segment
  for (let i = 1; i <= s.length - m; i++) {
    // update the sum to include the next square and exclude the previous square from the old segment
    sum = sum - s[i - 1] + s[i + m - 1];

    // check if the updated sum matches the target
    if (sum === d) {
      // increment count if it matches
      count++;
    }
  }

  // return the total count of valid segments
  return count;
};
