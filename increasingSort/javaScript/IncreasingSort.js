/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const sortedArray = Array.from(freqMap.entries())
    .sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]))
    .flatMap(([num, freq]) => Array(freq).fill(num));

  return sortedArray;
};
