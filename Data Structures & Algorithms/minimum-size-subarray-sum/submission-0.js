class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let currentSum = 0;
        let currentLen = Infinity;
        let left = 0;

        for (let right=0; right<nums.length; right++) {
            currentSum += nums[right];
            while (currentSum >= target) {
                currentLen = Math.min(currentLen, right - left + 1);
                currentSum -= nums[left];
                left++;
            }
        }

        if (currentLen === Infinity) {
            return 0;
        } else {
            return currentLen;
        }
    }
}
