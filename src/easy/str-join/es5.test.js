const strJoinEs5 = require('./es5');

describe('strJoinEs5', function () {
  test('should return a string joined with a separator', function () {
    expect(strJoinEs5(', ', '1', '2', '3', '4', '5')).toBe('1, 2, 3, 4, 5');
  });

  test('should throw an error when no elements are provided', function () {
    expect(function () {
      strJoinEs5(',');
    }).toThrow('At least one string must be provided');
  });

  test('should throw an error if the separator is not a string', function () {
    expect(function () {
      strJoinEs5(123, 'a', 'b');
    }).toThrow('Separator must be a string');
  });

  test('should throw an error if any of the elements is not a string', function () {
    expect(function () {
      strJoinEs5(',', 'a', 42, 'c');
    }).toThrow('Element at index 1 must be a string');
  });

  test('should handle a single element correctly', function () {
    expect(strJoinEs5(',', 'single')).toBe('single');
  });

  test('should work with different separators', function () {
    expect(strJoinEs5('-', 'a', 'b', 'c')).toBe('a-b-c');
    expect(strJoinEs5(' ', 'hello', 'world')).toBe('hello world');
  });
});
