/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  return details.reduce((count, detail) => {
    return count + (parseInt(detail.substring(11, 13)) > 60 ? 1 : 0);
  }, 0);
};
