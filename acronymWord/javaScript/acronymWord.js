/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  /**
   * @param {string[]} words
   * @param {string} s
   * @return {boolean}
   */
  var isAcronym = function (words, s) {
    let newStr = words.map((word) => word[0]).join("");
    return newStr === s;
  };
};
