var searchInsert = function (nums, target) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] >= target) {
      return j;
    }
  }
  return nums.length;
};
