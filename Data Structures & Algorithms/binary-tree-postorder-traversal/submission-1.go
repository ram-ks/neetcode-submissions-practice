/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func postorderTraversal(root *TreeNode) []int {
    stack := []*TreeNode{
        root,
    }
    visitedList := []bool{
        false,
    }

    var result []int = []int{}

    for len(stack) > 0 {
        current := stack[len(stack) - 1]
        stack = stack[:len(stack) - 1]

        visited := visitedList[len(visitedList) - 1]
        visitedList = visitedList[:len(visitedList) - 1]

        if (current != nil) {
            if (visited) {
                result = append(result, current.Val)
            } else {
                stack = append(stack, current)
                visitedList = append(visitedList, true)
                stack = append(stack, current.Right)
                visitedList = append(visitedList, false)
                stack = append(stack, current.Left)
                visitedList = append(visitedList, false)
            }
        }
    }

    return result
}
