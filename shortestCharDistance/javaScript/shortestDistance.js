/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const n = s.length;
  const ans = new Array(n).fill(0);
  let prev = -n;

  // First pass: left to right
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      prev = i;
    }
    ans[i] = i - prev;
  }

  // Second pass: right to left
  for (let i = prev - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }
    ans[i] = Math.min(ans[i], prev - i);
  }
  return ans;
};
