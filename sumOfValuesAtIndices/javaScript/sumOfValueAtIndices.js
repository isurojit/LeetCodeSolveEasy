/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countSetBits(num) {
  let count = 0;
  while (num) {
    num &= num - 1;
    count++;
  }
  return count;
}

var sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (countSetBits(i) === k) {
      sum += nums[i];
    }
  }
  return sum;
};
