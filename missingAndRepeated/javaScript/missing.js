/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  const count = new Array(n * n + 1).fill(0); // Create an array filled with 0s
  count[0] = 1; // Padding for 1-indexed

  // Count the occurrences of each number in the grid
  for (let row of grid) {
    for (let num of row) {
      count[num]++;
    }
  }

  // Find the repeated and missing values
  const repeated = count.findIndex((c) => c === 2);
  const missing = count.findIndex((c) => c === 0);

  return [repeated, missing];
};
