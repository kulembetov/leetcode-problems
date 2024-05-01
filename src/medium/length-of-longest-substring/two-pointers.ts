// return the length of the longest substring with no duplicates in a row

export const lengthOfLongestSubstring = (s: string): number => {
  // initialize left, right, maxLength variables to zero
  let left = 0,
    right = 0,
    maxLength = 0;

  // create a set to store characters in the current sliding window
  let charSet = new Set();

  // iterate over the string
  while (right < s.length) {
    // if the character is not in the set, add it and update maxLength
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      // if the character is a duplicate, remove characters from the set
      // starting from the left pointer until the duplicate is gone
      charSet.delete(s[left]);
      left++;
    }
  }

  // return the maximum length found
  return maxLength;
};
