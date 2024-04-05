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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  const stack = [];
  const heights = new Map();
  let lastVisited = null;

  let node = root;

  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      let current = stack[stack.length - 1];
      if (!current.right || current.right === lastVisited) {
        let leftHeight = heights.get(current.left) || 0;
        let rightHeight = heights.get(current.right) || 0;
        if (Math.abs(leftHeight - rightHeight) > 1) {
          return false;
        }
        heights.set(current, Math.max(leftHeight, rightHeight) + 1);
        lastVisited = stack.pop();
      } else {
        node = current.right;
      }
    }
  }

  return true;
};
