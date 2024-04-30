/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let ans = 0;
  const n = nums.length;
  for (let i of nums) {
    ans |= i;
  }
  return ans * Math.pow(2, n - 1);
};
