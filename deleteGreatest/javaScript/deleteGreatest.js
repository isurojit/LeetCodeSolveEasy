/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let ans = 0;
  grid.forEach((row) => row.sort((a, b) => a - b));
  for (let j = 0; j < grid[0].length; ++j) {
    let maxOfColumn = 0;
    for (let i = 0; i < grid.length; ++i)
      maxOfColumn = Math.max(maxOfColumn, grid[i][j]);
    ans += maxOfColumn;
  }
  return ans;
};
