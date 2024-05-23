/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let ans = -1;
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(-num)) {
      ans = Math.max(ans, Math.abs(num));
    }
    seen.add(num);
  }

  return ans;
};
