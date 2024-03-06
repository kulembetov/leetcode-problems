const topKFrequent = (nums: number[], k: number): number[] => {
  const frequencyMap = new Map<number, number>();

  nums.forEach((num) =>
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  );

  return Array.from(frequencyMap)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, k)
    .map(([num]) => num);
};

const nums = [1,1,1,6,7,7];

topKFrequent(nums, 2);