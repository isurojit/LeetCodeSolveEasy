/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let low = 0;
  let high = s.length;
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      result.push(low++);
    } else {
      result.push(high--);
    }
  }
  result.push(low);
  return result;
};
