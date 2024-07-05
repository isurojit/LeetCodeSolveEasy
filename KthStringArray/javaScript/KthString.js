/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const count = {};

  // Count the occurrences of each string in the array
  for (const a of arr) {
    if (count[a] === undefined) {
      count[a] = 1;
    } else {
      count[a]++;
    }
  }


  for (const a of arr) {
    if (count[a] === 1) {
      k--;
      if (k === 0) {
        return a;
      }
    }
  }

  return "";
};
