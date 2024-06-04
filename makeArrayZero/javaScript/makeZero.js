/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  return new Set(nums).size - (nums.includes(0) ? 1 : 0);
};
