export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  let dummy = new ListNode();
  let current = dummy;

  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 != null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
};

export const arrayToList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
};

export const listToArray = (list: ListNode | null): number[] => {
  const result: number[] = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  return result;
};
