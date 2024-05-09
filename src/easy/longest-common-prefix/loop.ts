// time complexity: O(logN), as we sort the array
// space complexity: O(1), without any extra data structures

// any prefix that is common between the first and the last string in a sorted array must be a common prefix for all strings in between
// because the first string represents the "minimum" possible starting characters and the last represents the "maximum" end characters of all possible common prefixes

// the sorted array would be ["ape", "apple", "april"].
// comparing the first and last: the first string is "ape" and the last is "april"
// now, any common prefix between "ape" and "april" must start both strings, and since both start with "ap", this must be the common prefix for "apple" as well,
// because "apple" lies between "ape" and "april" in the sorted order and starts with "ap"

export const longestCommonPrefix = (strs: string[]): string => {
  // return an empty string if the array is empty
  if (strs.length === 0) return '';
  // return the single string if there's only one in the array
  if (strs.length === 1) return strs[0];

  // sort the array of strings
  strs.sort();

  // initialize the first and last strings from the sorted array
  let first = strs[0];
  let last = strs[strs.length - 1];
  // initialize the prefix as an empty string
  let prefix = '';

  // iterate through the characters of the first string
  for (let i = 0; i < first.length; i++) {
    // add to prefix if the characters match
    if (first[i] === last[i]) {
      prefix += first[i];
    } else {
      // break the loop if characters do not match
      break;
    }
  }
  // return the calculated prefix
  return prefix;
};
