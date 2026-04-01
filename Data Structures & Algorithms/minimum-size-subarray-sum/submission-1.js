class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let maxLen = Infinity;
        let total = 0;
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            total += nums[right];

            while (total >= target) {
                //compute min
                maxLen = Math.min(maxLen, right - left + 1)

                // shift left
                total -= nums[left];
                left++;
            }
        }

        return maxLen === Infinity ? 0 : maxLen;
    }
}
