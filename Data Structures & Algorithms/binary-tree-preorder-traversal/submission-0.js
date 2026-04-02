/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        const stacks = [];
        let current = root;
        const result = [];

        while (current !== null || stacks.length !== 0) {
            if (current !== null) {
                result.push(current.val);
                if (current.right) {
                    stacks.push(current.right);
                }
                current = current.left;
            } else {
                current = stacks.pop();
            }
        }

        return result;
    }
}
