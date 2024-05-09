/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => {
    const count1 = countBits(a);
    const count2 = countBits(b);
    if (count1 === count2) {
      return a - b;
    } else {
      return count1 - count2;
    }
  });
  return arr;
};

function countBits(num) {
  let count = 0;
  while (num) {
    num &= num - 1;
    count++;
  }
  return count;
}
