// time complexity: O(n), due to a single pass through the candles array
// space complexity: O(1), as memory usage doesn't scale with input size

export const findTallestCandle = (candles: number[]): number => {
  let maxHeight = 0;
  let count = 0;

  for (let candle of candles) {
    if (candle > maxHeight) {
      maxHeight = candle;
      count = 1;
    } else if (candle === maxHeight) {
      count++;
    }
  }
  return count;
};
