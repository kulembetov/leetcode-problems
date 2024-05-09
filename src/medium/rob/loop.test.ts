import { robWithMemoization } from './loop';

describe('robWithMemoization', () => {
  it('should return 0 for an empty array', () => {
    expect(robWithMemoization([])).toBe(0);
  });

  it('should return the value of the single house', () => {
    expect(robWithMemoization([500])).toBe(500);
  });

  it('should choose the house with the higher value when there are two houses', () => {
    expect(robWithMemoization([300, 500])).toBe(500);
  });

  it('should calculate the maximum loot skipping houses as necessary', () => {
    expect(robWithMemoization([100, 300, 200, 500])).toBe(800);
  });

  it('should handle cases where all houses have the same value', () => {
    expect(robWithMemoization([200, 200, 200, 200, 200])).toBe(600);
  });
});
