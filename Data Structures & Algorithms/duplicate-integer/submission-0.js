class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};

        let result = false;

        for (let index in nums) {
            if (map[nums[index]]) {
                map[nums[index]] += 1;
                result = true;
            } else {
                map[nums[index]] = 1;
            }
        }

        return result;
    }
}
