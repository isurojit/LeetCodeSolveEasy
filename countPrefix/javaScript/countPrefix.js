/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  return words.reduce(
    (count, word) => (s.startsWith(word) ? count + 1 : count),
    0
  );
};
