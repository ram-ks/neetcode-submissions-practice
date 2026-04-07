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
        if (!root) { // base case
            return 0;
        }

        const left = this.dfs(root.left); // recursive case
        const right = this.dfs(root.right); // recursive case

        if (left === -1 || right === -1 || Math.abs(right - left) > 1) {
            return -1;
        }

        return 1 + Math.max(left, right); // add 1, after every traversal
    }
}
