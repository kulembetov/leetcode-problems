import { toCamelCase } from './index';

describe('toCamelCase', () => {
  test('converts words separated by hyphens to camelCase', () => {
    const input = 'what-a-nice-day-today';
    const expectedOutput = 'whatANiceDayToday';
    expect(toCamelCase(input)).toBe(expectedOutput);
  });

  test('converts words separated by underscores to camelCase', () => {
    const input = 'What_A_Nice_Day_Today';
    const expectedOutput = 'WhatANiceDayToday';
    expect(toCamelCase(input)).toBe(expectedOutput);
  });

  test('converts words separated by both hyphens and underscores to camelCase', () => {
    const input = 'What_a_Nice-Day-Today';
    const expectedOutput = 'WhatANiceDayToday';
    expect(toCamelCase(input)).toBe(expectedOutput);
  });

  test('handles an empty string', () => {
    const input = '';
    const expectedOutput = '';
    expect(toCamelCase(input)).toBe(expectedOutput);
  });

  test('handles single word with no separators', () => {
    const input = 'word';
    const expectedOutput = 'word';
    expect(toCamelCase(input)).toBe(expectedOutput);
  });
});
