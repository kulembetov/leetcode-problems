// time complexity: O((n, m), where n and m are the lengths of the two input lists
// space complexity: O((n, m), as a new list up to the length of the longer input list plus one is created

class ListNode {
  // value of the node
  val: number;
  // pointer to the next node
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    // set node value
    this.val = val;
    // set next node
    this.next = next;
  }
}

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode => {
  // create a dummy head node to simplify edge cases
  let dummyHead = new ListNode(0);
  // start with the dummy head
  let current = dummyHead;

  let carry = 0;

  // loop while either list has nodes or there is a carry left
  while (l1 !== null || l2 !== null || carry !== 0) {
    // start sum with carry value
    let sum = carry;

    // if l1 is not null, add its value to sum and move to the next node
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    // if l2 is not null, add its value to sum and move to the next node
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    // calculate carry for the next iteration
    carry = Math.floor(sum / 10);
    // create a new node with the current digit and append it to the result list
    current.next = new ListNode(sum % 10);
    // move current to the next node
    current = current.next;
  }

  // return the sum list, starting from next to dummy head
  return dummyHead.next as ListNode;
};

export const createList = (elements: number[]): ListNode | null => {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (const element of elements) {
    if (head === null) {
      head = new ListNode(element);
      tail = head;
    } else {
      tail!.next = new ListNode(element);
      tail = tail!.next;
    }
  }
  return head;
};

export const listToArray = (head: ListNode | null): number[] => {
  let array: number[] = [];
  while (head !== null) {
    array.push(head.val);
    head = head.next;
  }
  return array;
};
