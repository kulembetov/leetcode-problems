// time complexity: O(n), because we iterate over each element once
// space complexity: O(1), because the space used doesn't grow with the input size

const singleNumberXor = (nums: number[]): number => {
  let single = 0;
  for (let num of nums) {
    single ^= num;
  }
  return single;
};