/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let flag = true;
    for (let j = 0; j < word.length; j++) {
      if (!allowed.includes(word[j])) {
        flag = false;
        break;
      }
    }
    if (flag) count++;
  }
  return count;
};
