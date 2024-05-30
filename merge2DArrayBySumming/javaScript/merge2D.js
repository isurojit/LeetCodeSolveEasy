/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i][0] < nums2[j][0]) {
      result.push(nums1[i]);
      i++;
    } else if (nums1[i][0] > nums2[j][0]) {
      result.push(nums2[j]);
      j++;
    } else {
      result.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      i++;
      j++;
    }
  }
  while (i < nums1.length) {
    result.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    result.push(nums2[j]);
    j++;
  }
  return result;
};
