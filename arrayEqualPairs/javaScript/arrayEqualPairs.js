/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  let count = {};

  // Count the frequency of each number
  for (let num of nums) {
    if (count[num] === undefined) {
      count[num] = 0;
    }
    count[num] += 1;
  }

  // Check if all frequencies are even
  for (let key in count) {
    if (count[key] % 2 !== 0) {
      return false;
    }
  }

  return true;
};
