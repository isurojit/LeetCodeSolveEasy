/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let stack = [];
  stack.push({ node: root, sum: targetSum - root.val });

  while (stack.length > 0) {
    let { node, sum } = stack.pop();

    if (!node.left && !node.right && sum === 0) {
      return true;
    }

    if (node.left) {
      stack.push({ node: node.left, sum: sum - node.left.val });
    }

    if (node.right) {
      stack.push({ node: node.right, sum: sum - node.right.val });
    }
  }

  return false;
};
