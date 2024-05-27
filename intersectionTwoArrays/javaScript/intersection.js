/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let ans = [];
  let nums1Set = new Set(nums1);

  for (let num of nums2) {
    if (nums1Set.has(num)) {
      ans.push(num);
      nums1Set.delete(num);
    }
  }

  return ans;
};
