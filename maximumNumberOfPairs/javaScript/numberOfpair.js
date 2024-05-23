/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let ans = [0, 0];
  let count = new Map();

  // Create a frequency map
  for (let num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  // Calculate pairs and leftovers
  for (let i = 0; i <= 100; i++) {
    if (count.has(i)) {
      ans[0] += Math.floor(count.get(i) / 2);
      ans[1] += count.get(i) % 2;
    }
  }

  return ans;
};
