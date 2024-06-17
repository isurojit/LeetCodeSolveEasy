/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const n = nums.length;
  let i = 0;
  let j = 1;

  while (i < n) {
    while (i < n && nums[i] % 2 === 0) {
      i += 2;
    }
    while (j < n && nums[j] % 2 === 1) {
      j += 2;
    }
    if (i < n) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  return nums;
};
