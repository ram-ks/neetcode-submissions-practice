func lengthOfLongestSubstring(s string) int {
	set, gMax, left := make(map[rune]bool), 0, 0

	for right := 0; right < len(s); right++ {
		for set[rune(s[right])] {
			// shift left
			delete(set, rune(s[left]))
			left++
		}
		set[rune(s[right])] = true
		gMax = max(gMax, len(set))
	}
	return gMax
}
