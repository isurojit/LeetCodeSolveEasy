/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < indices.length; i++) {
    let [row, col] = indices[i];
    for (let j = 0; j < n; j++) {
      arr[row][j]++;
    }
    for (let j = 0; j < m; j++) {
      arr[j][col]++;
    }
  }
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] % 2 === 1) count++;
    }
  }
  return count;
};
