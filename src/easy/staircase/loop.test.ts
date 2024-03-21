import { staircase } from "./loop";

describe("staircase", () => {
  it("should print a staircase of size n", () => {
    const consoleSpy = jest.spyOn(console, "log");

    staircase(5);
    expect(consoleSpy).toHaveBeenCalledWith("    #");
    expect(consoleSpy).toHaveBeenCalledWith("   ##");
    expect(consoleSpy).toHaveBeenCalledWith("  ###");
    expect(consoleSpy).toHaveBeenCalledWith(" ####");
    expect(consoleSpy).toHaveBeenCalledWith("#####");
  });

  it("should print nothing for 0", () => {
    const consoleSpy = jest.spyOn(console, "log");

    staircase(0);
    expect(consoleSpy).not.toHaveBeenCalledWith();
  });

  it("should print a staircase of size 1", () => {
    const consoleSpy = jest.spyOn(console, "log");
    staircase(1);
    expect(consoleSpy).toHaveBeenCalledWith("#");
  });
});
