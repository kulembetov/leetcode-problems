// time complexity: O(n * m), where n is the number of coins and m is the amount
// space complexity: O(m), where m is the amount to be made

export const coinChange = (coins: number[], amount: number): number => {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
