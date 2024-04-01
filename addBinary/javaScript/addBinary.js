/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const ans = [];
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    if (i >= 0) {
      carry += parseInt(a[i]);
      i -= 1;
    }
    if (j >= 0) {
      carry += parseInt(b[j]);
      j -= 1;
    }
    ans.push(String(carry % 2));
    carry = Math.floor(carry / 2);
  }

  return ans.reverse().join("");
};
