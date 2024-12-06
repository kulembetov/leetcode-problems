import { coinChange } from './dp';

describe('coinChange', () => {
  test('typical numbers', () => {
    const coins = [1, 2, 5];
    const amount = 11;
    expect(coinChange(coins, amount)).toBe(3);
  });

  test('empty array', () => {
    const coins: number[] = [];
    const amount = 0;
    expect(coinChange(coins, amount)).toBe(0);
  });

  test('single element', () => {
    const coins = [1];
    const amount = 1;
    expect(coinChange(coins, amount)).toBe(1);
  });

  test('no solution', () => {
    const coins = [2];
    const amount = 3;
    expect(coinChange(coins, amount)).toBe(-1);
  });

  test('no solution with multiple coins', () => {
    const coins = [2, 5];
    const amount = 3;
    expect(coinChange(coins, amount)).toBe(-1);
  });
});
