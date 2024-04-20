// time complexity: O(n^2) due to the use of nested loops
// space complexity: O(1) as no extra data structures are created

export const shareChocolateBar = (
  // s represents the numbers on each square of the chocolate bar
  s: number[],
  // d is Ron's birth day, which means we are looking for segments where the sum equals 3
  d: number,
  // m is Ron's birth month, indicating the number of contiguous squares in each segment we are interested in
  m: number
): number => {
  // count of valid ways to share the chocolate
  let count = 0;

  // loop over each square where a full segment of length m can be formed
  for (let i = 0; i <= s.length - m; i++) {
    // sum of numbers in the current segment
    let sum = 0;

    // calculate sum of m contiguous squares starting at index i
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }

    // increment count if the sum matches Ron's birth day
    if (sum === d) {
      count++;
    }
  }

  // return the total count of valid segments
  return count;
};
