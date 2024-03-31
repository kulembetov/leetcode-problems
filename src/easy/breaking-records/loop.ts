// time complexity: O(n), as we iterate over array in sake of find the highest and lowest record
// space complexity: O(1), the amount of memory, the variables takes doesn't depend on the input size array

export const breakingRecords = (scores: number[]): number[] => {
  let highestScore = scores[0];
  let lowestScore = scores[0];

  let breakHighestCount = 0;
  let breakLowestCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      breakHighestCount++;
    } else if (scores[i] < lowestScore) {
      lowestScore = scores[i];
      breakLowestCount++;
    }
  }

  return [breakHighestCount, breakLowestCount];
};
