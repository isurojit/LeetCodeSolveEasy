/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  let ans = 0;
  let prev = 0;
  const n = nums.length;
  const freqMap = new Map();

  nums.forEach((num) => {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  });

  let next = n;

  for (const freq of freqMap.values()) {
    next -= freq;
    ans += prev * freq * next;
    prev += freq;
  }

  return ans;
};
