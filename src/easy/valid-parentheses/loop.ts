// time complexity: O(n), iterate once through string
// space complexity: O(n), stack size varies with input size
export const isValidParentheses = (str: string): boolean => {
  const stack: string[] = [];

  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (
        (char === ')' && top !== '(') ||
        (char === ']' && top !== '[') ||
        (char === '}' && top !== '{')
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
