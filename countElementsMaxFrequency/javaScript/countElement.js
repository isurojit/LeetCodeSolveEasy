/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let count = new Map();
  for (let num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  let maxFreq = Math.max(...count.values());
  return (
    [...count.values()].filter((freq) => freq === maxFreq).length * maxFreq
  );
};
