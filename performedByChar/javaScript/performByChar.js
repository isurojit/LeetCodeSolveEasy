/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let ans = 0;
  const count = {};

  for (const char of chars) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const word of words) {
    const tempCount = { ...count };
    let canForm = true;

    for (const c of word) {
      if (tempCount[c] !== undefined && tempCount[c] > 0) {
        tempCount[c]--;
      } else {
        canForm = false;
        break;
      }
    }

    if (canForm) {
      ans += word.length;
    }
  }

  return ans;
};
