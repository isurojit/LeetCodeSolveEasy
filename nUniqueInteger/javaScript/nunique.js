/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let result = [];
  for (let i = 1 - n; i < n; i += 2) {
    result.push(i);
  }
  return result;
};
