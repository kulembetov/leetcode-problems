import { breakingRecords } from './loop';

describe('breakingRecord', () => {
  it('should return the highest and lowest record is made for the season', () => {
    expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toStrictEqual([
      2, 4,
    ]);
    expect(breakingRecords([20, 21, 22, 23, 24, 25, 26, 1])).toStrictEqual([
      6, 1,
    ]);
    expect(breakingRecords([30, 20, 10, 5])).toStrictEqual([0, 3]);
  });
});
