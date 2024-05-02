/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let ans = 0;
  let seen = new Array(26 * 26).fill(false);

  function val(c) {
    return c.charCodeAt(0) - "a".charCodeAt(0);
  }

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (seen[val(word[1]) * 26 + val(word[0])]) {
      ans += 1;
    }
    seen[val(word[0]) * 26 + val(word[1])] = true;
  }

  return ans;
};
