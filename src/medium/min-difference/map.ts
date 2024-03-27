// time complexity: O(nlogn), due to sorting operation
// space complexity: O(n), due to creation of minutesArray

export const findMinDifference = (timePoints: string[]): number => {
  // convert timepoints to minutes
  let minutesArray = timePoints.map((time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  });

  // sort times in ascending order
  minutesArray.sort((a, b) => a - b);

  // max diff in minutes in a day
  let minDifference = 1440;

  // iterate through array
  // prevent to access the [i + 1] element, when i is already at the last index
  for (let i = 0; i < minutesArray.length - 1; i++) {
    let difference = minutesArray[i + 1] - minutesArray[i];
    // update min diff if smaller
    minDifference = Math.min(minDifference, difference);
  }

  // calculate cyclic diff between first and last timepoint
  const endStartDiff =
    1440 - minutesArray[minutesArray.length - 1] + minutesArray[0];
  minDifference = Math.min(minDifference, endStartDiff);

  return minDifference;
};
