/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  const maxNum = Math.max(...nums);
  const minNum = Math.min(...nums);
  return Math.max(0, maxNum - minNum - 2 * k);
};
