/* 
time complexity: O(n + n log n) - where n is the number of elements in the input array
first, we iterate over the array to build the frequency map, which takes O(n) then, converting the map
to an array and sorting it takes O(n log n) because we sort based on frequency
the final operations are linear, so the dominant term is O(n log n)

space complexity: O(n) - because the extra space required is primarily for the frequency map and
the array converted from the map the frequency map will store at most n elements if all elements
are unique, and converting this map to an array for sorting also requires space proportional to n
*/

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
