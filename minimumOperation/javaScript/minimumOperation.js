/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let count = 0;
  for (let num of nums) {
    if (num < k) {
      count++;
    }
  }

  return count;
};
