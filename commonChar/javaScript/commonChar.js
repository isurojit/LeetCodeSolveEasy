/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let ans = [];
  let commonCount = new Array(26).fill(Infinity);

  for (let word of words) {
    let count = new Array(26).fill(0);
    for (let char of word) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    for (let i = 0; i < 26; i++) {
      commonCount[i] = Math.min(commonCount[i], count[i]);
    }
  }

  for (let c = 0; c < 26; c++) {
    let char = String.fromCharCode("a".charCodeAt(0) + c);
    for (let j = 0; j < commonCount[c]; j++) {
      ans.push(char);
    }
  }

  return ans;
};
