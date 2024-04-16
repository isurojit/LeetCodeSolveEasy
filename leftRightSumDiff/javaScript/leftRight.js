/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let leftSum = 0;
  let rightSum = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    rightSum -= nums[j];
    result.push(Math.abs(leftSum - rightSum));
    leftSum += nums[j];
  }
  return result;
};
