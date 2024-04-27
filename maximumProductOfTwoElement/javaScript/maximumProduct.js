/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  return nums.sort((a, b) => a - b);
};
