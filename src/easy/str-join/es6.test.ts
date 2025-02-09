import { strJoinEs6 } from './es6';

describe('strJoin', () => {
  test('should return a string joined with a separator', () => {
    expect(strJoin(',', '1', '2', '3', '4', '5')).toBe('1,2,3,4,5');
  });

  test('should throw an error when no elements are provided', () => {
    expect(() => strJoin(',')).toThrow('At least one string must be provided');
  });

  test('should throw an error if the separator is not a string', () => {
    expect(() => strJoin(123 as any, 'a', 'b')).toThrow(
      'Separator must be a string'
    );
  });

  test('should throw an error if any of the elements is not a string', () => {
    expect(() => strJoin(',', 'a', 42 as any, 'c')).toThrow(
      'Element at index 1 must be a string'
    );
  });

  test('should handle a single element correctly', () => {
    expect(strJoin(',', 'single')).toBe('single');
  });

  test('should work with different separators', () => {
    expect(strJoin('-', 'a', 'b', 'c')).toBe('a-b-c');
    expect(strJoin(' ', 'hello', 'world')).toBe('hello world');
  });
});
