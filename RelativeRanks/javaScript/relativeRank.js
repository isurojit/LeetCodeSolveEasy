/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const n = score.length;
  const ans = new Array(n);
  const indices = [];

  for (let i = 0; i < n; i++) {
    indices.push(i);
  }

  indices.sort((a, b) => score[b] - score[a]);

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      ans[indices[0]] = "Gold Medal";
    } else if (i === 1) {
      ans[indices[1]] = "Silver Medal";
    } else if (i === 2) {
      ans[indices[2]] = "Bronze Medal";
    } else {
      ans[indices[i]] = String(i + 1);
    }
  }

  return ans;
};
