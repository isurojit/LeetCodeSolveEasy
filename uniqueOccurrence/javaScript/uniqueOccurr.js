/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  let arr2 = [];
  for (let key in obj) {
    arr2.push(obj[key]);
  }
  arr2.sort();
  for (let i = 0; i < arr2.length - 1; i++) {
    if (arr2[i] === arr2[i + 1]) {
      return false;
    }
  }
  return true;
};
