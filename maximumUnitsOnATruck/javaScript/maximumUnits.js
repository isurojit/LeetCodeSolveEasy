/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let ans = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (const [boxes, units] of boxTypes) {
    if (boxes >= truckSize) {
      return ans + truckSize * units;
    }
    ans += boxes * units;
    truckSize -= boxes;
  }

  return ans;
};
