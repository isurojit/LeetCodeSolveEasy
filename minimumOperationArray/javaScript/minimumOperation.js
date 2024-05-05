/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      result += nums[i] - 1;
      nums[i] = 1;
    }
    if (nums[i] > 0) {
      result += 1 - nums[i];
      nums[i] = 1;
    }
  }
  return result;
};
