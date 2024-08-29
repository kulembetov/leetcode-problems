import { numberToWords } from './index';

describe('numberToWords', () => {
  const originalLog = console.log;
  let logOutput: string[] = [];

  beforeEach(() => {
    logOutput = [];
    console.log = (output) => logOutput.push(output);
  });

  afterEach(() => {
    console.log = originalLog;
  });

  test('convert number 123 to words', () => {
    const result = numberToWords(123);
    expect(result).toBe('One Hundred Twenty Three');
  });

  test('convert number 12345 to words', () => {
    const result = numberToWords(12345);
    expect(result).toBe('Twelve Thousand Three Hundred Forty Five');
  });

  test('convert number 1234567 to words', () => {
    const result = numberToWords(1234567);
    expect(result).toBe(
      'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'
    );
  });

  test('convert number 0 to words', () => {
    const result = numberToWords(0);
    expect(result).toBe('Zero');
  });

  test('convert number 1000000 to words', () => {
    const result = numberToWords(1000000);
    expect(result).toBe('One Million');
  });
});
