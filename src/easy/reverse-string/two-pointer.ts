// time complexity: O(n), because of iterating over the string array once
// space complexity: O(1), due to the size of the left and right variables is not increasing to the input array size

export const reverseString = (s: string[]): void => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};
