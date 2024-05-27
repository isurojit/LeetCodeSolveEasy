/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
  const kMaxBit = 30;
  let sum = 0;

  for (let i = 0; i <= kMaxBit; i++) {
    let count = 0;
    for (let num of nums) {
      if ((num >> i) & 1) {
        count++;
      }
    }
    if (count >= k) {
      sum += 2 ** i;
    }
  }

  return sum;
};
