// time complexity: O(n), because we iterate over the input array once
// space complexity: O(n), because we store the result in a separate array

export const range = (start: number, end: number, step: number): number[] => {
  if (step === 0) return [];

  const result: number[] = [];

  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i);
  }

  return result;
};
