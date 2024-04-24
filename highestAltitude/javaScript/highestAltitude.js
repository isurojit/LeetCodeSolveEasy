/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let alt = 0;
  for (let i = 0; i < gain.length; i++) {
    alt += gain[i];
    max = Math.max(max, alt);
  }
  return max;
};
