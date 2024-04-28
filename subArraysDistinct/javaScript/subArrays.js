/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  let totalSum = 0;
  const numElements = nums.length;
  for (let i = 0; i < numElements; i++) {
    const uniqueElements = new Set();
    for (let j = i; j < numElements; j++) {
      uniqueElements.add(nums[j]);

      totalSum += uniqueElements.size ** 2;
    }
  }

  return totalSum;
};
