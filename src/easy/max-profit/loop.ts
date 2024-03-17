// time complexity: O(n), because of iterating over the input array once
// space complexity: O(1), size doesn't change regardless of the input array

const maxProfit = (prices: number[]): number => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  return maxProfit;
};

export default maxProfit;