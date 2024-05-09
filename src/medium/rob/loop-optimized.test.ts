import { robOptimized } from './loop-optimized';

describe('robOptimized', () => {
  it('should return 0 for an empty array', () => {
    expect(robOptimized([])).toBe(0);
  });

  it('should return the value of the single house', () => {
    expect(robOptimized([500])).toBe(500);
  });

  it('should choose the house with the higher value when there are two houses', () => {
    expect(robOptimized([300, 500])).toBe(500);
  });

  it('should calculate the maximum loot skipping houses as necessary', () => {
    expect(robOptimized([100, 300, 200, 500])).toBe(800);
  });

  it('should handle cases where all houses have the same value', () => {
    expect(robOptimized([200, 200, 200, 200, 200])).toBe(600);
  });
});
