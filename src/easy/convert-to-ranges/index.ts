// time complexity: O(n log n) - due to the use of the Timsort or Merge sort algorithm depended on the browser engine for sorting the array
// space complexity: O(n) - as we create a sorted copy of the input array and also store the result ranges in a separate array

export const convertToRanges = (numbers: number[]): string => {
  if (numbers.length === 0) return '';

  const sorted = [...numbers].sort((a: number, b: number) => a - b);

  const ranges: string[] = [];

  let start = sorted[0];
  let end = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end + 1) {
      end = sorted[i];
    } else {
      ranges.push(start === end ? `${start}` : `${start}-${end}`);
      start = sorted[i];
      end = sorted[i];
    }
  }

  ranges.push(start === end ? `${start}` : `${start}-${end}`);

  return ranges.join(', ');
};
