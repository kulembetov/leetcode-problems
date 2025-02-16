const permute = (nums: number[]): number[][] => {
  const result: number[][] = [];

  const backtrack = (first: number): void => {
    if (first === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let i = first; i < nums.length; i++) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      backtrack(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  }

  backtrack(0);
  return result;
}