/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const countElements = (array) => {
    const counter = {};
    for (const num of array) {
      counter[num] = (counter[num] || 0) + 1;
    }
    return counter;
  };

  const targetCount = countElements(target);
  const arrCount = countElements(arr);

  if (Object.keys(targetCount).length !== Object.keys(arrCount).length) {
    return false;
  }

  for (const key in targetCount) {
    if (targetCount[key] !== arrCount[key]) {
      return false;
    }
  }

  return true;
};
