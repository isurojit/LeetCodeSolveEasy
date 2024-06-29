/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  const ans = [];
  let min = Infinity;

  arr.sort((a, b) => a - b);

  for (let i = 0; i + 1 < arr.length; ++i) {
    const diff = arr[i + 1] - arr[i];
    if (diff < min) {
      min = diff;
      ans.length = 0; // Clear the array
    }
    if (diff === min) {
      ans.push([arr[i], arr[i + 1]]);
    }
  }

  return ans;
};
