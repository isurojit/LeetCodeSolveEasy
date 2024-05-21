/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  const n = startTime.length;
  let ans = 0;

  for (let i = 0; i < n; ++i) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      ++ans;
    }
  }

  return ans;
};
