// time complexity: O(n), because of iterating over the input array once
// space complexity: O(1), due to the variables, which are fixed in size

const maxProfitPointer = (prices: number[]): number => {
  let buyPointer = 0;
  let maxProfit = 0;

  for (let sellPointer = 1; sellPointer < prices.length; sellPointer++) {
    if (prices[sellPointer] < prices[buyPointer]) {
      buyPointer = sellPointer;
    } else {
      maxProfit = Math.max(maxProfit, prices[sellPointer] - prices[buyPointer]);
    }
  }
  return maxProfit;
};
