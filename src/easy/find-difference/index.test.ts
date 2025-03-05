import { findDifference } from './index';

describe("findDifference", () => {
    it("should return the difference between two arrays", () => {
        const nums1 = [1, 2, 3, 4, 5];
        const nums2 = [1, 2, 3, 4, 6];
        const result = findDifference(nums1, nums2);
        expect(result).toEqual([[5], [6]]);
    });

    it("should return an empty array if both arrays are the same", () => {
        const nums1 = [1, 2, 3];
        const nums2 = [1, 2, 3];
        const result = findDifference(nums1, nums2);
        expect(result).toEqual([[], []]);   
    });

    it("should return the difference between two arrays with duplicates", () => {
        const nums1 = [1, 2, 3, 4, 5, 5];
        const nums2 = [1, 2, 3, 4, 6, 6];
        const result = findDifference(nums1, nums2);
        expect(result).toEqual([[5], [6]]);
    });
});