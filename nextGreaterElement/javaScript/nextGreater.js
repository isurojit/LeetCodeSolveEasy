/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const numToNextGreater = new Map();
  const stack = []; // a decreasing stack

  for (const num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      numToNextGreater.set(stack.pop(), num);
    }
    stack.push(num);
  }

  return nums1.map((num) => numToNextGreater.get(num) || -1);
};
