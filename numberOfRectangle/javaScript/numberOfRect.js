/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < rectangles.length; i++) {
    let curr = Math.min(rectangles[i][0], rectangles[i][1]);
    if (curr > max) {
      max = curr;
      count = 1;
    } else if (curr === max) {
      count++;
    }
  }
  return count;
};
