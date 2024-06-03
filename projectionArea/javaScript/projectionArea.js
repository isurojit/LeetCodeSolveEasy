/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const xyProjection = grid
    .flat()
    .reduce((acc, val) => acc + (val > 0 ? 1 : 0), 0);
  const yzProjection = grid.reduce((acc, row) => acc + Math.max(...row), 0);
  const zxProjection = grid[0]
    .map((_, colIndex) => Math.max(...grid.map((row) => row[colIndex])))
    .reduce((acc, val) => acc + val, 0);

  return xyProjection + yzProjection + zxProjection;
};
