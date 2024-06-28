/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let ans = 0;

  for (let i = 0, j = nums.length - 1; i <= j; ++i, --j) {
    ans += nums[j];
    if (i < j) {
      ans += nums[i] * Math.pow(10, Math.floor(Math.log10(nums[j])) + 1);
    }
  }

  return ans;
};
