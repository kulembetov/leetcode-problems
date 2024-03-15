// time complexity: O(n^3), where n is the length of the array
// space complexity: O(1), requires a constant amount of space, regardless of the input size

// https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/3365255/segment-tree-complete-explanation-with-intuition-multiple-languages/

// time exceeded solution
// const countGoodTriplets = (
//   arr: number[],
//   a: number,
//   b: number,
//   c: number
// ): number => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       // we use abs to calculate the absolute difference between arr[i] and arr[j]
//       // this is needed to check the condition |arr[i] - arr[j]| <= a
//       if (Math.abs(arr[i] - arr[j]) > a) continue;
//       for (let k = j + 1; k < arr.length; k++) {
//         // |arr[j] - arr[k]| and |arr[i] - arr[k]| are within the limits specified by b and c
//         if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// };

const goodTriplets = (nums1: number[], nums2: number[]): number => {
  const n = nums1.length;
  const segmentTree = new Array(n * 4).fill(0);
  let ans = 0;

  // maps elements to their indices in nums2 for quick look-up.
  const indexInNums2 = new Map(nums2.map((num, index) => [num, index]));

  // increment the value in the segment tree at the given index.
  function update(index: number, updateIndex: number, start = 0, end = n - 1): void {
    if (start === end) {
      segmentTree[index]++;
      return;
    }
    
    // equivalent to Math.floor((start + end) / 2)
    const mid = (start + end) >> 1;
    if (updateIndex <= mid) {
      update(index * 2, updateIndex, start, mid);
    } else {
      update(index * 2 + 1, updateIndex, mid + 1, end);
    }
    segmentTree[index] = segmentTree[index * 2] + segmentTree[index * 2 + 1];
  }

  // query the sum in the range [queryStart, queryEnd]
  const query = (index: number, queryStart: number, queryEnd: number, start = 0, end = n - 1): number => {
    if (queryEnd < start || queryStart > end) return 0;
    if (queryStart <= start && end <= queryEnd) return segmentTree[index];
    
    const mid = (start + end) >> 1;
    const left = query(index * 2, queryStart, queryEnd, start, mid);
    const right = query(index * 2 + 1, queryStart, queryEnd, mid + 1, end);
    return left + right;
  }

  // start by updating the segment tree with the first element of nums1
  update(1, indexInNums2.get(nums1[0])!);
  
  for (let i = 1; i < n; i++) {
    const indexInB = indexInNums2.get(nums1[i])!;
    const commonElementsOnLeft = query(1, 0, indexInB);
    const uniqueElementsOnLeftInA = i - commonElementsOnLeft;
    const elementsAfterIndexInB = n - indexInB - 1;
    const commonElementsOnRight = elementsAfterIndexInB - uniqueElementsOnLeftInA;
    
    ans += commonElementsOnLeft * commonElementsOnRight;
    update(1, indexInB);
  }
  
  return ans;
}
