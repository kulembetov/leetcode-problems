// time complexity: O(n) - iterates over the string array exactly once, where n is the number of digits in the input number
// space complexity: O(1) - no additional space is used that grows proportionally with the input size

export const numberPalindrome = (n: number): boolean => {
  const str = n.toString().split('');

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] < str[right]) return false;

    left++;
    right--;
  }
  return true;
};
