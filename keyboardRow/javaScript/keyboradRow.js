/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const ans = [];
  const rows = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ];

  for (let word of words) {
    const lowerWord = new Set(word.toLowerCase());
    if (rows.some((row) => [...lowerWord].every((char) => row.has(char)))) {
      ans.push(word);
    }
  }

  return ans;
};
