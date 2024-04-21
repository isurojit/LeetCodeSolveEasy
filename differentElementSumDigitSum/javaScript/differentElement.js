/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elementSum = 0;
  let digitSum = 0;

  for (let num of nums) {
    elementSum += num;
  }

  for (let num of nums) {
    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }
  }
  return Math.abs(elementSum - digitSum);
};
