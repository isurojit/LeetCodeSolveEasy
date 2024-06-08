/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const ans = Array.from({ length: cols }, () => Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ans[j][i] = matrix[i][j];
    }
  }

  return ans;
};
