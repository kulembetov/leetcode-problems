import { pivotIndex } from "./index";

describe("pivotIndex", () => {
    it("should return the pivot index of the array", () => {
        expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
        expect(pivotIndex([1, 2, 3])).toBe(-1);
        expect(pivotIndex([2, 1, -1])).toBe(0);
        expect(pivotIndex([0, 0, 0, 0, 0, 0])).toBe(0);
    });

    it("should return -1 if there is no pivot index", () => {
        expect(pivotIndex([1, 2, 3])).toBe(-1);
    });

    it("should return -1 if the array has only two elements", () => {
        expect(pivotIndex([1, 1])).toBe(-1);
    });

    it("should return 0 if the array has only one element", () => {
        expect(pivotIndex([1])).toBe(0);
    });
});