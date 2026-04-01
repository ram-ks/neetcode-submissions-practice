func maxProfit(prices []int) int {
	gMax, left, right := 0, 0, 1

	for right < len(prices) {
		if (prices[right] < prices[left]) {
			left = right
		} else {
			// compute the difference
			diff := prices[right] - prices[left]
			gMax = max(gMax, diff)
		}
		right++
	}

	return gMax
}
