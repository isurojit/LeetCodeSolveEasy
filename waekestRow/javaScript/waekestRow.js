/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const candidates = [];

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    const sum = row.reduce((a, b) => a + b, 0);
    candidates.push([sum, i]);
  }

  candidates.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  return candidates.slice(0, k).map((candidate) => candidate[1]);
};
