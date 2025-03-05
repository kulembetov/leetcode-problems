export const findDifference = (nums1: number[], nums2: number[]): number[][] => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const uniqueNums1 = [...set1].filter(num => !set2.has(num));
    const uniqueNums2 = [...set2].filter(num => !set1.has(num));

    return [uniqueNums1, uniqueNums2];
}