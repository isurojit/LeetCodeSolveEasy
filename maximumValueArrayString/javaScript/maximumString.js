/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  return Math.max(
    ...strs.map((s) => {
      return /[a-zA-Z]/.test(s) ? s.length : parseInt(s, 10);
    })
  );
};
