/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  let map1 = new Map(items1);
  let map2 = new Map(items2);

  for (let [key, value] of map2) {
    if (map1.has(key)) {
      map1.set(key, map1.get(key) + value);
    } else {
      map1.set(key, value);
    }
  }

  let result = Array.from(map1.entries()).sort((a, b) => a[0] - b[0]);

  return result;
};
