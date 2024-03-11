import { singleNumberXor } from "./xor";

describe("singleNumberXor", () => {
  it("should return the number that appears only once", () => {
    expect(singleNumberXor([2, 2, 1])).toBe(1);
    expect(singleNumberXor([4, 1, 2, 1, 2])).toBe(4);
    expect(singleNumberXor([0, 1, 0])).toBe(1);
  });

  it("should return 0 for an empty array", () => {
    expect(singleNumberXor([])).toBe(0);
  });
});
