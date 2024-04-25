/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    sum += mat[i][mat.length - 1 - i];
  }
  if (mat.length % 2 === 1) {
    sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
  }
  return sum;
};
