/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let maxOfRight = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    arr[i] = maxOfRight;
    maxOfRight = Math.max(maxOfRight, current);
  }
  return arr;
};
