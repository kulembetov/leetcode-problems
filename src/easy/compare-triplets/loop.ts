// time complexity: O(n), because it goes through each element of the array once
// space complexity: O(1), uses a fixed amount of space (variables), regardless of the input size

const compareTriplets = (a: number[], b: number[]): number[] => {
  let aliceScore = 0,
    bobScore = 0;

  for (let i = 0; i < b.length; i++) {
    a[i] > b[i] ? aliceScore++ : a[i] < b[i] ? bobScore++ : 0;
  }
  return [aliceScore, bobScore];
};
