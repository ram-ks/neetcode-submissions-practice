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
     * @return {number}
     */

    #result = 0;
    dfs(node) {
        if (node === null) {
            return 0;
        } 

        let left = this.dfs(node.left);
        let right = this.dfs(node.right);

        this.#result = Math.max(this.#result, Math.max(left + right));

        return 1 + Math.max(left, right);
    }


    diameterOfBinaryTree(root) {
        this.dfs(root)

        return this.#result;
    }
}
