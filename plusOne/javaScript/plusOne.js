/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //Used BigInt for big number cases
  //join() used to conver array to string then parsed it to number. after that added 1
  //again converted to string and used split to make it string array
  //mapped over string and made it to array
  const num = (BigInt(digits.join("")) + BigInt(1)).toString().split("");
  return num.map((x) => parseInt(x));
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
