// time complexity: O(n), because of iterating through each step of the staircase exactly once
// space complexity: O(1), the amount of memory used by the function is does not grow with the input size

export const staircase = (n: number): void => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
};
