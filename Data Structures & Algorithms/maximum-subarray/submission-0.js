class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currentSum = 0;
        let maxSum = nums[0];

        for (let i=0; i<nums.length; i++) {
            currentSum = Math.max(currentSum, 0);
            currentSum += nums[i];
            maxSum = Math.max(currentSum, maxSum);
        }

        return maxSum;
    }
}
