// Time Complexity: O(n + m), as we traverse both lists once
// Space Complexity: O(1), as we don't use any extra space

export const intervalListIntersections = (
  user1: number[][],
  user2: number[][]
) => {
  const result: number[][] = [];

  let i = 0,
    j = 0;

  while (i < user1.length && j < user2.length) {
    const [start1, end1] = user1[i];
    const [start2, end2] = user2[j];

    const start = Math.max(start1, start2);
    const end = Math.min(end1, end2);

    if (start <= end) {
      result.push([start, end]);
    }

    if (end1 < end2) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};
