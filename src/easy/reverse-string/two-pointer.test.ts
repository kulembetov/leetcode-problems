import { reverseString } from "./two-pointer";

describe("reverseString", () => {
  it("should reverse the array of charachters in place", () => {
    const charArr = ["h", "e", "l", "l", "o"];
    reverseString(charArr);
    expect(charArr).toEqual(["o", "l", "l", "e", "h"]);
  });

  it("should handle an empty array", () => {
    const charArr: string[] = [];
    reverseString(charArr);
    expect(charArr).toEqual([]);
  });

  it("should handle a single-character arra", () => {
    const charArr: string[] = ["a"];
    reverseString(charArr);
    expect(charArr).toEqual(["a"]);
  });

  it("should handle an array with even number of characters", () => {
    const charArr: string[] = ["a", "b", "c", "d"];
    reverseString(charArr);
    expect(charArr).toEqual(["d", "c", "b", "a"]);
  });
});
