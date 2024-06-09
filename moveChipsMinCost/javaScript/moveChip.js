/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let count = [0, 0];

  for (let pos of position) {
    count[pos % 2] += 1;
  }

  return Math.min(count[0], count[1]);
};
