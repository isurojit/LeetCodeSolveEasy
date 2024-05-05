/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let operations = 0;
  const length = nums.length;

  for (let i = 1; i < length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];
    const minCurr = Math.max(prev + 1, curr);
    operations += minCurr - curr;
    nums[i] = minCurr;
  }

  return operations;
};
