import { isPalindromeReverse } from "./reverse";

describe("isPalindromeReverse", () => {
  it("should return boolean for the palindrome", () => {
    const s: string = "level";
    expect(isPalindromeReverse(s)).toBe(true);
  });

  it("should handle an empty string", () => {
    const s: string = "";
    expect(isPalindromeReverse(s)).toBe(true);
  });

  it("should reject a non palindrome", () => {
    const s: string = "cat";
    expect(isPalindromeReverse(s)).toBe(false);
  });

  it("should process a numeric palindrome", () => {
    const s: string = "12321";
    expect(isPalindromeReverse(s)).toBe(true);
  });

  it("should handle a complex palindrome", () => {
    const s: string = "A man, a plan, a canal: Panama";
    expect(isPalindromeReverse(s)).toBe(true);
  });
});
