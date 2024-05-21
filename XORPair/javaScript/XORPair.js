/**
 * @param {number[]} nums
 * @return {number}
 */
class TrieNode {
  constructor() {
    this.children = [null, null];
    this.min = Infinity;
    this.max = -Infinity;
  }
}

class BitTrie {
  constructor(maxBit) {
    this.maxBit = maxBit;
    this.root = new TrieNode();
  }

  insert(num) {
    let node = this.root;
    for (let i = this.maxBit; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (!node.children[bit]) {
        node.children[bit] = new TrieNode();
      }
      node = node.children[bit];
      node.min = Math.min(node.min, num);
      node.max = Math.max(node.max, num);
    }
  }

  getMaxXor(x) {
    let maxXor = 0;
    let node = this.root;
    for (let i = this.maxBit; i >= 0; i--) {
      const bit = (x >> i) & 1;
      const toggleBit = bit ^ 1;
      if (
        node.children[toggleBit] &&
        node.children[toggleBit].max > x &&
        node.children[toggleBit].min <= 2 * x
      ) {
        maxXor = maxXor | (1 << i);
        node = node.children[toggleBit];
      } else if (node.children[bit]) {
        node = node.children[bit];
      } else {
        return 0;
      }
    }
    return maxXor;
  }
}
var maximumStrongPairXor = function (nums) {
  const maxNum = Math.max(...nums);
  const maxBit = Math.floor(Math.log2(maxNum));
  const bitTrie = new BitTrie(maxBit);

  for (const num of nums) {
    bitTrie.insert(num);
  }

  return Math.max(...nums.map((num) => bitTrie.getMaxXor(num)));
};
