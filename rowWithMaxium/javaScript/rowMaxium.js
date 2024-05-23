/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let ans = [0, 0];

  for (let i = 0; i < mat.length; i++) {
    let ones = mat[i].filter((num) => num === 1).length;
    if (ones > ans[1]) {
      ans[0] = i;
      ans[1] = ones;
    }
  }

  return ans;
};
