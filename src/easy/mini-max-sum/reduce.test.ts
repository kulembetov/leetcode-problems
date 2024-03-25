import { miniMaxSum } from './reduce';

describe('miniMaxSum', () => {
  it('should log the min and max sum of the array', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const arr = [2, 5, 7, 6, 3];
    miniMaxSum(arr);
    expect(consoleSpy).toHaveBeenCalledWith(16, 21);
  });

  it('should log min and max sum correctly for an array with the same numbers', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const arr = [1, 1, 1, 1, 1, 1];
    miniMaxSum(arr);
    expect(consoleSpy).toHaveBeenCalledWith(5, 5);
  });
});
