func maxProfit(prices []int) int {
	gMax, left := 0, 0

	for right := 1; right < len(prices); right++ {
		if (prices[right] < prices[left]) {
			left = right
		} else {
			// compute the difference
			diff := prices[right] - prices[left]
			gMax = max(gMax, diff)
		}
	}

	return gMax
}
