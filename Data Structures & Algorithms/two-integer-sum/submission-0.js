class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};

        for (let index in nums) {
            if (obj[target - nums[index]]) {
                return [parseInt(obj[target - nums[index]]), parseInt(index)];
            }
            obj[nums[index]] = index;
        }

        return [];
    }
}
