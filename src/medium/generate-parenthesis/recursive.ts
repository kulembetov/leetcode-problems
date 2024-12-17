// O(n) time complexity is achieved because we iterate through the input array once
// O(1) space complexity is achieved because the variables are fixed in size

export const generateParenthesis = (n: number): string[] => {
  const result: string[] = [];

  const generate = (str: string, open: number, close: number) => {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }

    if (open < n) {
      generate(str + '(', open + 1, close);
    }

    if (close < open) {
      generate(str + ')', open, close + 1);
    }
  };

  generate('', 0, 0);
  return result;
};
