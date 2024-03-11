// time complexity: O(n), due to the iterating the initial string once and over at most half of the normalized string
// space complexity: O(1), the amount of any extra doesn't scale, variables size doesn't depend on the input size

const isPalindrome = (s: string): boolean => {
  const str = s.replace(/[\W_]+/g, "").toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }
  return true;
};
