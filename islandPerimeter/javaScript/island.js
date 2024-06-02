/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let islands = 0;
  let neighbors = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        islands += 1;
        if (i + 1 < m && grid[i + 1][j] === 1) {
          neighbors += 1;
        }
        if (j + 1 < n && grid[i][j + 1] === 1) {
          neighbors += 1;
        }
      }
    }
  }

  return islands * 4 - neighbors * 2;
};
