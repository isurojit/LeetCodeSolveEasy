/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  return nums.reduce((count, num) => count + (num % 3 !== 0 ? 1 : 0), 0);
};
