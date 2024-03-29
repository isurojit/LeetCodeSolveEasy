/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let newNode;
  if (list1.val < list2.val) {
    newNode = list1;
    newNode.next = mergeTwoLists(list1.next, list2);
  } else {
    newNode = list2;
    newNode.next = mergeTwoLists(list1, list2.next);
  }

  return newNode;
};

// Helper function to convert array to linked list
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Example usage
let list1 = arrayToLinkedList([1, 2, 4]);
let list2 = arrayToLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4]
