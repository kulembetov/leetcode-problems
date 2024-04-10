// time complexity: O(n), where n is the total number of fruits, because we iterate over each distance
// space complexity: O(1), as we use the constant amount of space regardless of the input size

export const countApplesAndOranges = (
  a: number, // apple tree position
  b: number, // orange tree position
  s: number, // house start point
  t: number, // house end point
  apples: number[],
  oranges: number[] // array of distances each fruit falls
): void => {
  let appleCount = 0;
  let orangeCount = 0;

  apples.forEach((distance) => {
    // calculate where each apple falls
    const landingPoint = a + distance;
    // check if the landing point is within the house boundaries
    if (landingPoint >= s && landingPoint <= t) {
      // increment the apple counter if it lands on the house
      appleCount++;
    }
  });

  oranges.forEach((distance) => {
    // calculate where each orange falls
    const landingPoint = b + distance;
    // check if the landing point is within the house boundaries
    if (landingPoint >= s && landingPoint <= t) {
      // increment the orange counter if it lands on the house
      orangeCount++;
    }
  });

  console.log(appleCount);
  console.log(orangeCount);
};
