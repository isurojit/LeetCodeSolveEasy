/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  var distinctDifferenceArray = function (nums) {
    const kMax = 50;
    const ans = [];
    const prefixCount = new Array(kMax + 1).fill(0);
    const suffixCount = new Array(kMax + 1).fill(0);
    let distinctPrefix = 0;
    let distinctSuffix = 0;

    for (const num of nums) {
      if (suffixCount[num] === 0) {
        distinctSuffix += 1;
      }
      suffixCount[num] += 1;
    }

    for (const num of nums) {
      if (prefixCount[num] === 0) {
        distinctPrefix += 1;
      }
      prefixCount[num] += 1;
      if (suffixCount[num] === 1) {
        distinctSuffix -= 1;
      }
      suffixCount[num] -= 1;
      ans.push(distinctPrefix - distinctSuffix);
    }

    return ans;
  };
};
