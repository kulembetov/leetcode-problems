import { countApplesAndOranges } from './loop';

describe('countApplesAndOranges', () => {
  it('should count the number of apples and oranges that land on the house', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    countApplesAndOranges(5, 15, 7, 11, [-2, 2, 1], [5, -6]);

    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);

    consoleSpy.mockRestore();
  });
});
