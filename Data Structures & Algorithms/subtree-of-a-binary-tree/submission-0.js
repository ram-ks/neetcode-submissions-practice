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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) {
            return true;
        }

        if (!root) {
            return false;
        }

        if (this.isSameTree(root, subRoot)) {
            return true;
        } else {
            return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot); 
        }
    }

    isSameTree(currentNode, compareNode) {
        if (!currentNode && !compareNode) {
            return true;
        }

        if ((currentNode && compareNode) && currentNode.val === compareNode.val) {
            return this.isSameTree(currentNode.left, compareNode.left) && this.isSameTree(currentNode.right, compareNode.right);
        }

        return false;
    }
}
