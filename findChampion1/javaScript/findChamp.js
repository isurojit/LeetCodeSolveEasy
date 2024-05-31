/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  const n = grid.length;
  const inDegrees = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }
      if (grid[i][j] === 1) {
        inDegrees[j]++;
      } else {
        inDegrees[i]++;
      }
    }
  }

  const zeroCount = inDegrees.filter((degree) => degree === 0).length;

  return zeroCount > 1 ? -1 : inDegrees.indexOf(0);
};
