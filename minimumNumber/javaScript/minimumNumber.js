/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums.sort((a, b) => a - b);

  return nums.map((num, i) => {
    if (i % 2 === 0) {
      return nums[i + 1];
    } else {
      return nums[i - 1];
    }
  });
};
