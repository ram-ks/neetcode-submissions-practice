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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    dfs(current, compare) {
        if (!current && !compare) {
            return true;
        }

        if (!current || !compare) {
            return false;
        }

        if (current.val === compare.val) {
            return this.dfs(current.left, compare.left) && this.dfs(current.right, compare.right);
        } else {
            return false;
        }
    }

    isSameTree(p, q) {
        return this.dfs(p, q);
    }
}
