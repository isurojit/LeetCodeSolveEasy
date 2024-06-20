/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const count = new Map();

  for (const word of words1) {
    if (count.has(word)) {
      count.set(word, count.get(word) + 1);
    } else {
      count.set(word, 1);
    }
  }

  for (const word of words2) {
    if (count.has(word) && count.get(word) < 2) {
      count.set(word, count.get(word) - 1);
    }
  }

  let result = 0;
  for (const value of count.values()) {
    if (value === 0) {
      result += 1;
    }
  }

  return result;
};
