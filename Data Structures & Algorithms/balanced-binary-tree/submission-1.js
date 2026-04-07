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
     * @return {boolean}
     */
    isBalanced(root) {
        const result = this.dfs(root);
        return result !== -1;
    }

    dfs(root) {
        if (!root) {
            return 0;
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        if (left === -1 || right === -1) {
            return -1;
        }

        if (Math.abs(right - left) > 1) {
            return -1;
        }

        return 1 + Math.max(left, right);
    }
}
