class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();

        for (let index in nums) {
            if (set.has(nums[index])) {
                return true;
            }
            set.add(nums[index]);
        }

        return false;
    }
}
