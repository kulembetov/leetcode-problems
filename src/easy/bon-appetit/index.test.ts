import { bonAppetit } from './index';

describe('bonAppetit', () => {
  const originalLog = console.log;
  let logOutput: string[] = [];

  beforeEach(() => {
    logOutput = [];
    console.log = (output) => logOutput.push(output);
  });

  afterEach(() => {
    console.log = originalLog;
  });

  test('Anna paid more than her share', () => {
    const bill = [3, 10, 2, 9];
    const k = 1;
    const b = 15;
    bonAppetit(bill, k, b);
    expect(logOutput).toContain(8);
  });

  test('Anna paid less than her share', () => {
    const bill = [3, 10, 2, 9];
    const k = 1;
    const b = 5;
    bonAppetit(bill, k, b);
    expect(logOutput).toContain(-2);
  });

  test('Single item in the bill', () => {
    const bill = [10];
    const k = 0;
    const b = 0;
    bonAppetit(bill, k, b);
    expect(logOutput).toContain('Bon Appetit');
  });

  test('Anna does not eat the only item', () => {
    const bill = [10];
    const k = 0;
    const b = 5;
    bonAppetit(bill, k, b);
    expect(logOutput).toContain(5);
  });
});
