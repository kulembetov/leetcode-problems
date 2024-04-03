import { migratoryBirds } from './map';

describe('migratoryBirds', () => {
  it('should return the lowest type id of the most frequently sighted birds ', () => {
    expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
    expect(migratoryBirds([1, 2, 3, 4, 5, 6])).toBe(1);
    expect(migratoryBirds([3, 3, 3, 3, 3, 3])).toBe(3);
  });
});
