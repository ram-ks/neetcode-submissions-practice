class Solution {
    /**
     * @param {number[]} nums [2, 3, -4]
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let currentMin = 0;
        let currentMax = 0;
        let gMax = nums[0];
        let gMin = nums[0];
        let total = 0;

        for (let i = 0; i<nums.length; i++) {
            currentMin = Math.min(currentMin + nums[i], nums[i]);
            currentMax = Math.max(currentMax + nums[i], nums[i]);
            total += nums[i];
            gMax = Math.max(gMax, currentMax);
            gMin = Math.min(gMin, currentMin);
        }

        console.log(gMax);

        return gMax > 0 ? Math.max(gMax, total - gMin) : gMax;
    }
}
