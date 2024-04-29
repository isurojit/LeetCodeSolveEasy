/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  const x = Math.max(...nums);
  return x * k + (k * (k - 1)) / 2;
};
