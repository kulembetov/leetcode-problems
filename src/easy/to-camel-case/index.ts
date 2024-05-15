// time complexity: O(n)
// space complexity: O(1), it's in place solution

export const toCamelCase = (input: string): string => {
  // split the input string by hyphens and underscores
  return input
    .split(/[-_]/)
    .map((word, index) => {
      // for the first word, keep the original case of the first letter
      if (index === 0) {
        return word;
      }
      // for subsequent words, capitalize the first letter and make the rest lowercase
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      // join the words back together without any separators
    })
    .join('');
};
