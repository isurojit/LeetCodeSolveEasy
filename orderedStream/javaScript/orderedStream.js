/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.stream = new Array(n);
  this.pointer = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.stream[idKey - 1] = value;
  const result = [];

  while (
    this.pointer < this.stream.length &&
    this.stream[this.pointer] !== undefined
  ) {
    result.push(this.stream[this.pointer]);
    this.pointer++;
  }

  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
