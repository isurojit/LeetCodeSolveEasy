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
var isSymmetric = function (root) {
  const stack = [root, root];
  while (stack.length) {
    const node1 = stack.pop();
    const node2 = stack.pop();
    if (node1 === null && node2 === null) continue;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;
    stack.push(node1.left, node2.right);
    stack.push(node1.right, node2.left);
  }
  return true;
};
