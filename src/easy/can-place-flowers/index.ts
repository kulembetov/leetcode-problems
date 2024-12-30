// time complexity: O(n), because we iterate over the input array once
// space complexity: O(1), because we don't store any additional variables

export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      // check if the previous and next flowerbeds are empty or out of bounds
      const prev = i === 0 || flowerbed[i - 1] === 0;
      const next = i === 0 || flowerbed[i + 1] === 0;

      // if the previous and next flowerbeds are empty, we can plant a flower
      if (prev && next) {
        flowerbed[i] = 1;
        count++;

        if (count >= n) {
          return true;
        }
      }
    }
  }
  return count >= n;
};
