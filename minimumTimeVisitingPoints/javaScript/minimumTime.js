/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let time = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let [x1, y1] = points[i];
    let [x2, y2] = points[i + 1];
    time += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  }
  return time;
};
