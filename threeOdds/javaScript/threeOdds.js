/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let count = 0;
  for (const a of arr) {
    count = a % 2 === 1 ? count + 1 : 0;
    if (count === 3) {
      return true;
    }
  }
  return false;
};
