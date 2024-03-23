import { miniMaxSumSlice } from './slice';

describe('miniMaxSumSlice', () => {
  it('should log the min and max sum of the array', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const arr = [2, 5, 7, 6, 3];
    miniMaxSumSlice(arr);
    expect(consoleSpy).toHaveBeenCalledWith(16, 21);
  });

  it('should log min and max sum correctly for an array with the same numbers', () => {
    const consoleSpy = jest.spyOn(console, "log");
    const arr = [1, 1, 1, 1, 1]
    miniMaxSumSlice(arr);
    expect(consoleSpy).toHaveBeenCalledWith(4, 4);
  })
});