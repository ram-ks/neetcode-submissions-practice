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
    postorderTraversal(root) {
        const stack = [root]
        const visitedList = [false]
        const result = []

        while (stack.length > 0) {
            let current = stack.pop();
            let visited = visitedList.pop();

            if (current !== null) {
                if (visited) {
                    result.push(current.val)
                } else {
                    stack.push(current)
                    visitedList.push(true)
                    stack.push(current.right)
                    visitedList.push(false)
                    stack.push(current.left)
                    visitedList.push(false)
                }
            }

        }

        return result;
    }
}
