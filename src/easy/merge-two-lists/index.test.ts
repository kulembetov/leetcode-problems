import { mergeTwoLists, arrayToList, listToArray } from './index';

describe('mergeTwoLists', () => {
  test('merging two non-empty lists', () => {
    const list1 = arrayToList([1, 2, 4]);
    const list2 = arrayToList([1, 3, 4]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toStrictEqual([1, 1, 2, 3, 4, 4]);
  });

  test('one list is empty', () => {
    const list1 = arrayToList([]);
    const list2 = arrayToList([1, 3, 4]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toStrictEqual([1, 3, 4]);
  });

  test('both lists are empty', () => {
    const list1 = arrayToList([]);
    const list2 = arrayToList([]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toStrictEqual([]);
  });

  test('both lists have one element each', () => {
    const list1 = arrayToList([2]);
    const list2 = arrayToList([1]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toStrictEqual([1, 2]);
  });
});
