func characterReplacement(s string, k int) int {
	mapOfChar, left, frequency := make(map[rune]int), 0, 0
	gMax := 0

	for right, v := range s {
		mapOfChar[v]++
		frequency = max(frequency, mapOfChar[v])

		if ((right - left) + 1 - frequency > k) {
			mapOfChar[rune(s[left])]--
			left++
		}

		gMax = max(gMax, ((right - left) + 1))
	}

	return gMax
}
