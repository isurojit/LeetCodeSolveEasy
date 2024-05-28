/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  let newArr = [];
  words.forEach((w) => {
    newArr.push(...w.split(separator));
  });
  return newArr.filter((splitWord) => splitWord);
};
