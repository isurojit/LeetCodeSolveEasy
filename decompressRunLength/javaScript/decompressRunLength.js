/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i += 2) {
    let count = nums[i];
    let value = nums[i + 1];
    for (let j = 0; j < count; j++) {
      result.push(value);
    }
  }
  return result;
};
