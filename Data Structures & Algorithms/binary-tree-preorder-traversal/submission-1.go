/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 
func preorderTraversal(root *TreeNode) []int {
    var stack []*TreeNode
    var result []int = []int{}

    current := root
    for current != nil || len(stack) > 0 {
        if current != nil {
            result = append(result, current.Val)
            if current.Right != nil {
                stack = append(stack, current.Right)
            }
            current = current.Left
        } else {
            current = stack[len(stack) - 1]
            stack = stack[:len(stack) - 1]
        }
    }

    return result
}
