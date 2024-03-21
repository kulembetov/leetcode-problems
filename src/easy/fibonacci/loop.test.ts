import { fibonacci } from "./loop";

describe("fibonacci", () => {
  it("should return the n-th Fibonacci number", () => {
    expect(fibonacci(10)).toBe(55);
  });

  it("should return the 0th Fibonacci number for input 0", () => {
    expect(fibonacci(0)).toBe(0);
  });
});
