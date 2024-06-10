/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);

  function numOfElementsLessThan(query) {
    let summ = 0;
    for (let i = 0; i < nums.length; i++) {
      summ += nums[i];
      if (summ > query) {
        return i;
      }
    }
    return nums.length;
  }

  return queries.map((query) => numOfElementsLessThan(query));
};
