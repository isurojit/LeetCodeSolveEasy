/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  let min1 = Infinity;
  let min2 = Infinity;

  for (let price of prices) {
    if (price <= min1) {
      min2 = min1;
      min1 = price;
    } else if (price < min2) {
      min2 = price;
    }
  }

  const minCost = min1 + min2;
  return minCost > money ? money : money - minCost;
};
