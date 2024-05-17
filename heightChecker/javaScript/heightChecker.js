/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let ans = 0;
  let currentHeight = 1;
  const count = new Array(101).fill(0);

  for (let height of heights) {
    count[height]++;
  }

  for (let height of heights) {
    while (count[currentHeight] === 0) {
      currentHeight++;
    }
    if (height !== currentHeight) {
      ans++;
    }
    count[currentHeight]--;
  }

  return ans;
};
