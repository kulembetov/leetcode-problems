import { uniqueElements } from './loop';

describe('uniqueElements', () => {
  test('removes consecutive duplicates from a string array', () => {
    const input = [
      'A',
      'A',
      'A',
      'A',
      'B',
      'B',
      'B',
      'C',
      'C',
      'D',
      'A',
      'A',
      'B',
      'B',
      'B',
    ];
    const expectedOutput = ['A', 'B', 'C', 'D', 'A', 'B'];
    expect(uniqueElements(input)).toEqual(expectedOutput);
  });

  test('removes consecutive duplicates from a mixed case string array', () => {
    const input = ['A', 'B', 'B', 'C', 'C', 'c', 'A', 'D'];
    const expectedOutput = ['A', 'B', 'C', 'c', 'A', 'D'];
    expect(uniqueElements(input)).toEqual(expectedOutput);
  });

  test('removes consecutive duplicates from a number array', () => {
    const input = [1, 2, 2, 3, 3];
    const expectedOutput = [1, 2, 3];
    expect(uniqueElements(input)).toEqual(expectedOutput);
  });

  test('returns an empty array when the input is an empty array', () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(uniqueElements(input)).toEqual(expectedOutput);
  });

  test('handles a single element array', () => {
    const input = ['A'];
    const expectedOutput = ['A'];
    expect(uniqueElements(input)).toEqual(expectedOutput);
  });
});
