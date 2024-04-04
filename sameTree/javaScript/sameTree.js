/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  const stack = [p, q];
  while (stack.length) {
    const node1 = stack.pop();
    const node2 = stack.pop();
    if (node1.val !== node2.val) return false;

    const left1 = node1.left;
    const left2 = node2.left;
    const right1 = node1.right;
    const right2 = node2.right;
    if (
      (left1 === null) !== (left2 === null) ||
      (right1 === null) !== (right2 === null)
    )
      return false;

    if (left1) stack.push(left1, left2);
    if (right1) stack.push(right1, right2);
  }
  return true;
};
