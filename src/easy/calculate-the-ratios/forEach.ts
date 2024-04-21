// time complexity: O(n), iterates through the array once
// space complexity: O(1), uses fixed amount of space

export const calculateRatios = (arr: number[]): void => {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  const total = arr.length;

  // increment count based on element type
  arr.forEach((element) => {
    if (element > 0) {
      positiveCount++;
    } else if (element < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });

  // calculate ratios
  const positiveRatio = positiveCount / total;
  const negativeRatio = negativeCount / total;
  const zeroRatio = zeroCount / total;

  // print ratios formatted to six decimal places
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
};
