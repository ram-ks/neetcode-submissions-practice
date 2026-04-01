func isAnagram(s string, t string) bool {
	if (len(s) != len(t)) {
		return false
	}

	countS, countT := make(map[rune]int), make(map[rune]int)

	for i, v := range s {
		countS[v]++
		countT[rune(t[i])]++
	}

	for k, v := range countS {
		if (v != countT[k]) {
			return false
		}
	}

	return true
}
