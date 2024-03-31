/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  //used trim to remove whitespaces from front and back. for this we get words only last
  //used split to make an array
  //used slice(-1) to get last element
  //used join to get the last word from array
  //then save the length of that word and returned.
  let result = s.trim().split(" ").slice(-1).join("").length;
  return result;
};

console.log(lengthOfLastWord("   fly me   to   the moon   "));
