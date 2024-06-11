/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const ans = [];
  const count = new Array(1001).fill(0);

  for (const a of arr1) {
    count[a]++;
  }

  for (const a of arr2) {
    while (count[a] > 0) {
      ans.push(a);
      count[a]--;
    }
  }

  for (let num = 0; num < 1001; num++) {
    while (count[num] > 0) {
      ans.push(num);
      count[num]--;
    }
  }

  return ans;
};
