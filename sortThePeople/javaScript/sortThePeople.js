/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], heights[i]]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  let res = [];
  for (let i = 0; i < names.length; i++) {
    res.push(arr[i][0]);
  }
  return res;
};
