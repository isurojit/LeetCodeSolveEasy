/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let map = new Map();
  for (let i = 0; i < paths.length; i++) {
    map.set(paths[i][0], paths[i][1]);
  }
  for (let i = 0; i < paths.length; i++) {
    if (!map.has(paths[i][1])) {
      return paths[i][1];
    }
  }
  return "";
};
