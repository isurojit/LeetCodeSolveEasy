/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const ans = [];
  const q = [[rCenter, cCenter]];
  const seen = new Set([`${rCenter},${cCenter}`]);

  while (q.length > 0) {
    const [i, j] = q.shift();
    ans.push([i, j]);
    for (const [dx, dy] of dirs) {
      const x = i + dx;
      const y = j + dy;
      if (x < 0 || x >= rows || y < 0 || y >= cols) {
        continue;
      }
      if (seen.has(`${x},${y}`)) {
        continue;
      }
      seen.add(`${x},${y}`);
      q.push([x, y]);
    }
  }

  return ans;
};
