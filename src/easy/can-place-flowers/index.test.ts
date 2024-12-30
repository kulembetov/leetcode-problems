import { canPlaceFlowers } from './index';

describe('canPlaceFlowers', () => {
  test('typical numbers', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  test('empty array', () => {
    expect(canPlaceFlowers([], 1)).toBe(false);
  });

  test('zero flowers', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 0)).toBe(true);
  });

  test('no flowers', () => {
    expect(canPlaceFlowers([1, 1, 1, 1, 1], 1)).toBe(false);
  });

  test('single flower', () => {
    expect(canPlaceFlowers([1], 1)).toBe(false);
  });
});
