/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  return nums.reduce((acc, num, i) => {
    if (nums.length % (i + 1) === 0) {
      return acc + num ** 2;
    }
    return acc;
  }, 0);
};
