/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  for (const row of matrix) {
    const minIndex = row.indexOf(Math.min(...row));
    const column = matrix.map((r) => r[minIndex]);
    if (row[minIndex] === Math.max(...column)) {
      return [row[minIndex]];
    }
  }
  return [];
};
