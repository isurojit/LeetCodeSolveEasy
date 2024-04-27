/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const count1 = nums1.reduce((acc, num) => acc + (set2.has(num) ? 1 : 0), 0);
  const count2 = nums2.reduce((acc, num) => acc + (set1.has(num) ? 1 : 0), 0);
  return [count1, count2];
};
