/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const count = new Map();

  function updateCount(nums) {
    const uniqueNums = new Set(nums);
    for (const num of uniqueNums) {
      count.set(num, (count.get(num) || 0) + 1);
    }
  }

  updateCount(nums1);
  updateCount(nums2);
  updateCount(nums3);

  const result = [];
  for (const [num, c] of count.entries()) {
    if (c >= 2) {
      result.push(num);
    }
  }

  return result;
};
