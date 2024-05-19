/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const scores = [];

  for (const operation of operations) {
    switch (operation) {
      case "+":
        scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        break;
      case "D":
        scores.push(scores[scores.length - 1] * 2);
        break;
      case "C":
        scores.pop();
        break;
      default:
        scores.push(parseInt(operation));
    }
  }

  return scores.reduce((total, score) => total + score, 0);
};
