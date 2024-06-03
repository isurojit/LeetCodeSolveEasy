/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  let ans = [];
  let maxHeap = nums.map((num) => -num);
  maxHeap.sort((a, b) => a - b); // Heapify the maxHeap
  let half = Math.floor(nums.reduce((a, b) => a + b, 0) / 2);

  while (half >= 0) {
    const max = -maxHeap.shift(); // Pop the maximum element
    ans.push(max);
    half -= max;
  }

  return ans;
};
