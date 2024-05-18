/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length < 3) {
    return -1;
  } else {
    return nums.slice(0, 3).sort((a, b) => a - b)[1];
  }
};
