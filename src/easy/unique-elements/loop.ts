// time complexity: O(n), as we iterate through array exactly once
// space complexity: O(n), as we create the extra array to store unique elements

export const uniqueElements = <T>(sequence: T[]): T[] => {
  if (sequence.length === 0) return [];

  const results: T[] = [sequence[0]];

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i - 1]) {
      results.push(sequence[i]);
    }
  }

  return results;
};
