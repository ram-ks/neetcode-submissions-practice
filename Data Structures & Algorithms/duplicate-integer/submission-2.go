func hasDuplicate(nums []int) bool {
	set := make(map[int]struct{})

	for _, v := range nums {
		if _, ok := set[v]; ok {
			return true
		}
		set[v] = struct{}{}
	}

	return false
}
