/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let arr = image[i];
    arr = arr.reverse();
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        arr[j] = 1;
      } else {
        arr[j] = 0;
      }
    }
  }
  return image;
};
