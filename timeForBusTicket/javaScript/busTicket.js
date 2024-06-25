/**
 * @param {number[]} tickets
 * @param {number} k
 */
var timeRequiredToBuy = function (tickets, k) {
  let ans = 0;

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      ans += Math.min(tickets[i], tickets[k]);
    } else {
      ans += Math.min(tickets[i], tickets[k] - 1);
    }
  }

  return ans;
};
