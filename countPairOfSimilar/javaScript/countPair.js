/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let ans = 0;

  function getMask(word) {
    let mask = 0;
    for (const c of word) {
      mask |= 1 << (c.charCodeAt(0) - "a".charCodeAt(0));
    }
    return mask;
  }

  const masks = words.map((word) => getMask(word));

  for (let i = 0; i < masks.length; i++) {
    for (let j = i + 1; j < masks.length; j++) {
      if (masks[i] === masks[j]) {
        ans += 1;
      }
    }
  }

  return ans;
};
