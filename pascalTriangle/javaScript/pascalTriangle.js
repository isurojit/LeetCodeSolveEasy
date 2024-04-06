/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = [];
  for (let row = 0; row < numRows; row++) {
    triangle[row] = [];
    for (let col = 0; col <= row; col++) {
      triangle[row][col] = 1;
    }
  }
  for (let row = 2; row < numRows; row++) {
    for (let col = 1; col < row; col++) {
      triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
    }
  }
  return triangle;
};
