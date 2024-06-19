/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  const firstSeenIndex = Array(26).fill(-1);
  let isValid = true;

  Array.from(s).forEach((c, i) => {
    const j = c.charCodeAt(0) - "a".charCodeAt(0);
    const prevIndex = firstSeenIndex[j];
    if (prevIndex !== -1 && i - prevIndex - 1 !== distance[j]) {
      isValid = false;
    }
    firstSeenIndex[j] = i;
  });

  return isValid;
};
