import { calculateRatios } from './forEach';

describe('calculate the ration', () => {
  let consoleSpy: jest.SpyInstance<void>;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should pint the ratios of positive, negative and zero values in the array', () => {
    calculateRatios([1, 1, 0, -1, -1]);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '0.400000');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '0.400000');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '0.200000');
  });

  it('should handle an array with all zeroes', () => {
    calculateRatios([0, 0, 0, 0, 0]);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '0.000000');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '0.000000');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '1.000000');
  });

  it('should handle an empty array', () => {
    calculateRatios([]);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'NaN');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'NaN');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 'NaN');
  });

  it('should handle an array with all positives', () => {
    calculateRatios([1, 1, 1]);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '1.000000');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '0.000000');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '0.000000');
  });
});
