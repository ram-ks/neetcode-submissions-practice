func twoSum(nums []int, target int) []int {
    mapOfInt := make(map[int]int)

	for i, v := range nums {
		sub := target - v
		if _, ok := mapOfInt[sub]; ok {
			return []int{mapOfInt[sub], i}
		}
		mapOfInt[v] = i
	}

	return []int{0, 0}
}
