import { largestAltitude } from "./index";

describe("largestAltitude", () => {
    it("should return the largest altitude", () => {
        expect(largestAltitude([-6, 7, 2, 3, -4, 5])).toBe(7);
    })

    it("should return the largest altitude", () => {
        expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
    })

    it("should return the largest altitude", () => {
        expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
    })

    it("empty array should return 0", () => {
        expect(largestAltitude([])).toBe(0);
    })
})