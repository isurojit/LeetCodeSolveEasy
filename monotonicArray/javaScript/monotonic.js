/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    increasing = increasing && nums[i - 1] <= nums[i];
    decreasing = decreasing && nums[i - 1] >= nums[i];
  }

  return increasing || decreasing;
};
