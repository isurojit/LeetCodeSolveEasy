/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let ans = 0;

  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] - ans > 0) {
      ans += 1;
    }
  }

  return ans;
};
