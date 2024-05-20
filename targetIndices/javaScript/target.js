/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let count = nums.filter((num) => num === target).length;
  let lessThan = nums.filter((num) => num < target).length;
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(lessThan + i);
  }
  return result;
};
