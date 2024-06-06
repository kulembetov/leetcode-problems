// time complexity: O(n), as we iterate through each price only once
// space complexity: O(1), as our additional variables doesn't depend on the input array

export const maxProfit = (prices: number[]): number => {
  if (prices.length === 0) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};
