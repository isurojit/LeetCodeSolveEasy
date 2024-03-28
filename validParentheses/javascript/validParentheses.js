/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const charHolder = [];
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "{" || ch === "[") {
      charHolder.push(ch);
    } else {
      const top = charHolder.pop();
      if (top !== brackets[ch]) {
        return false;
      }
    }
  }

  return charHolder.length === 0;
};

console.log(isValid("[]()[]{}"));
