// time complexity: O(1) - always the same, as it iterates over the digits of the input number once.
// space complexity: O(1) - the amount of space doesn't increase with the input size.

export const reverseNumberPalindrome = (n: number): boolean => {
  let original = n;
  let reversed = 0;

  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return original === reversed;
};

// const reverseNumberPalindrome = (n: number): boolean => {
//   let [original, reversed] = [n, 0];
//   while (n > 0) [reversed, n] = [reversed * 10 + (n % 10), Math.floor(n / 10)];
//   return original === reversed;
// };
