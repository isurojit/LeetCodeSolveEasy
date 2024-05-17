/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i + 1] || nums[i] === nums[i + 2]) {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};
