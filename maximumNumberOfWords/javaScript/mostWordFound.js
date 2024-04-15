/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    let count = 0;
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === " ") {
        count++;
      }
    }
    if (count > max) {
      max = count;
    }
  }
  return max + 1;
};
