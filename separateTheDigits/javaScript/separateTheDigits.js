/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  return nums.map((x) => x.toString().split("")).flatMap((x) => x.map(Number));
};
