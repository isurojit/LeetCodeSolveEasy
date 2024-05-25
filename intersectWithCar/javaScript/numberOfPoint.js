/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  const kMax = 100;
  let ans = 0;
  let runningSum = 0;
  const count = new Array(kMax + 2).fill(0);

  for (const [start, end] of nums) {
    count[start] += 1;
    count[end + 1] -= 1;
  }

  for (let i = 1; i <= kMax; i++) {
    runningSum += count[i];
    if (runningSum > 0) {
      ans += 1;
    }
  }

  return ans;
};
