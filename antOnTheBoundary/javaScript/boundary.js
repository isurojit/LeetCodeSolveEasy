/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let count = 0;
  let prefixSum = 0;

  for (let num of nums) {
    prefixSum += num;
    if (prefixSum === 0) {
      count++;
    }
  }

  return count;
};
