/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const positiveCount = nums.filter((num) => num > 0).length;
  const negativeCount = nums.filter((num) => num < 0).length;
  return Math.max(positiveCount, negativeCount);
};
