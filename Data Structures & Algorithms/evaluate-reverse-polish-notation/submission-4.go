func evalRPN(tokens []string) int {
    var stack []int

    for _,token := range tokens {
        switch token {
            case "+", "-", "*", "/":
                a, b := stack[len(stack) - 1], stack[len(stack) - 2]
                stack = stack[:len(stack) - 2]

                result := 0

                switch token {
                    case "+":
                        result = a + b
                    case "-":
                        result = b - a
                    case "*":
                        result = a * b
                    case "/":
                        result = b / a
                }

                stack = append(stack, result)
            default: 
                num, _ := strconv.Atoi(token)
                stack = append(stack, num)
        }
    }

    return stack[len(stack) - 1]
}
