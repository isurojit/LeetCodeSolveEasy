/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  const n = arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min;

  if (range % (n - 1) !== 0) {
    return false;
  }

  const diff = range / (n - 1);
  if (diff === 0) {
    return true;
  }

  const seen = new Set();

  for (const a of arr) {
    if ((a - min) % diff !== 0) {
      return false;
    }
    if (seen.has(a)) {
      return false;
    }
    seen.add(a);
  }

  return true;
};
