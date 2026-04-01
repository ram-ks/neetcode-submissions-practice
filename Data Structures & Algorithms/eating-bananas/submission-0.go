func minEatingSpeed(piles []int, h int) int {
	maxPile := 0

	for _, value := range piles {
		maxPile = max(maxPile, value)
	}

	fmt.Println(maxPile)

	left, right := 1, maxPile
	res := right

	for left <= right {
		middle := (right + left) / 2
		hours := 0

		for _, v := range piles {
			hours += int(math.Ceil(float64(v)/float64(middle)))
		}
		
		if hours <= h {
			// move right
			res = middle
			right = middle - 1
		} else {
			// move left
			left = middle + 1
		}
	}

	return res
}
