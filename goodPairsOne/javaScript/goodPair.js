/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  return nums1.reduce((count, num1) => {
    return (
      count +
      nums2.reduce((innerCount, num2) => {
        return innerCount + (num1 % (num2 * k) === 0 ? 1 : 0);
      }, 0)
    );
  }, 0);
};
