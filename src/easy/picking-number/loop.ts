// time complexity: O(n), as we iterates through each element of the input array
// space complexity: O(1), uses a fixed size array of 100 elements

export const pickingNumbers = (a: number[]): number => {
  // create a frequency array initialized with zeros
  let frequency = Array(100).fill(0);

  // populate the frequency array with counts of elements from input array `a`
  for (let num of a) {
    frequency[num]++;
  }

  // variable to store the longest subsequence length
  let longest = 0;

  // iterate through the frequency array to calculate longest subsequence
  for (let i = 1; i < 100; i++) {
    let current = frequency[i] + frequency[i - 1];
    longest = Math.max(longest, current);
  }

  return longest;
};
