// time complexity: O(n), as we iterate over birds to find the birdId and count exactly once in the array
// space complexity: O(n), as the amount of memory is occupied by the map is dependent of the input size array

export const migratoryBirds = (arr: number[]): number => {
  // create a map to hold the frequency of each bird ID
  const frequencyMap = new Map<number, number>();
  // track the highest frequency of bird sightings
  let maxCount = 0;
  // track the bird ID with the highest frequency
  let maxBirdId = 0;

  // iterate over the array once to populate the frequencyMap
  for (let i = 0; i < arr.length; i++) {
    const birdId = arr[i];
    // increment the count for this bird ID in the map, defaulting to 0 if not set yet
    const count = (frequencyMap.get(birdId) || 0) + 1;
    frequencyMap.set(birdId, count);

    // if the current bird's count is greater than the maxCount, or if it's equal but the birdId is smaller
    if (count > maxCount || (count === maxCount && birdId < maxBirdId)) {
      // update maxCount with the current bird's count
      maxCount = count;
      // update maxBirdId with the current bird's ID
      maxBirdId = birdId;
    }
  }
  // return the bird ID that occurs most frequently
  return maxBirdId;
};
