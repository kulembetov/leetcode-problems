import { addTwoNumbers, createList, listToArray } from './loop';

describe('addTwoNumbers', () => {
  it('should add two numbers represented by linked lists and return the sum as a linked list', () => {
    const list1 = createList([2, 4, 3]); // 342
    const list2 = createList([5, 6, 4]); // 465
    const expectedResult = [7, 0, 8]; // 807
    expect(listToArray(addTwoNumbers(list1, list2))).toEqual(expectedResult);

    const list3 = createList([0]); // 0
    const list4 = createList([0]); // 0
    const expectedResult2 = [0]; // 0
    expect(listToArray(addTwoNumbers(list3, list4))).toEqual(expectedResult2);

    const list5 = createList([9, 9, 9, 9, 9, 9, 9]); // 9999999
    const list6 = createList([1]); // 1
    const expectedResult3 = [0, 0, 0, 0, 0, 0, 0, 1]; // 10000000
    expect(listToArray(addTwoNumbers(list5, list6))).toEqual(expectedResult3);
  });

  it('should handle empty list inputs correctly', () => {
    const list1 = createList([]);
    const list2 = createList([1, 2, 3]); // 321
    const expectedResult = [1, 2, 3]; // 321
    expect(listToArray(addTwoNumbers(list1, list2))).toEqual(expectedResult);

    const list3 = createList([]);
    const list4 = createList([]);
    const expectedResult2: number[] = [];
    expect(listToArray(addTwoNumbers(list3, list4))).toEqual(expectedResult2);
  });
});
