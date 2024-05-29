/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  function getEncrypted(num) {
    let maxDigit = 0;
    let base = 0;
    while (num > 0) {
      maxDigit = Math.max(maxDigit, num % 10);
      base = base * 10 + 1;
      num = Math.floor(num / 10);
    }
    return base * maxDigit;
  }

  return nums.reduce((sum, num) => sum + getEncrypted(num), 0);
};
