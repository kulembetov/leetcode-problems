// time complexity: O(n), because of iterating over the initial string to normalize it and reversing it
// space complexity: O(1), due to creating an array of characters and copy of the string when reversing it
const isPalindromeReverse = (s: string): boolean => {
  const str = s.replace(/[\W_]+/g, "").toLowerCase();
  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}
