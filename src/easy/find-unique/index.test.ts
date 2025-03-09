import { findUnique } from "./index";

describe('findUnique function tests', () => {
    it('should return true when all frequencies are unique', () => {
        expect(findUnique([1, 2, 2, 3, 3, 3])).toBe(true);
    });

    it('should return false when there are duplicate frequencies', () => {
        expect(findUnique([1, 1, 2, 2, 3, 3])).toBe(false);
    });

    it('should return true for an empty array', () => {
        expect(findUnique([])).toBe(true);
    });

    it('should return true for an array with one element', () => {
        expect(findUnique([5])).toBe(true);
    });
});