/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  const maxLocal = [];

  for (let i = 0; i < n - 2; i++) {
    maxLocal.push([]);
    for (let j = 0; j < n - 2; j++) {
      let max = -Infinity;
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          max = Math.max(max, grid[x][y]);
        }
      }
      maxLocal[i].push(max);
    }
  }

  return maxLocal;
};
