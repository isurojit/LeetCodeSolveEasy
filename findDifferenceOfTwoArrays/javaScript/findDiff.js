/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set();
  const set4 = new Set();
  for (const num of set1) {
    if (!set2.has(num)) {
      set3.add(num);
    }
  }
  for (const num of set2) {
    if (!set1.has(num)) {
      set4.add(num);
    }
  }
  return [Array.from(set3), Array.from(set4)];
};
