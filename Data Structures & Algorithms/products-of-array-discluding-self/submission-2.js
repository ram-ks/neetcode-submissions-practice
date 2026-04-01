class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // compute prefix except current
        const prefix = [];
        for (let i = 0; i < nums.length; i++) {
            const prev = nums[i - 1] === undefined ? 1 : nums[i - 1];
            const lastElementOfPrefix = prefix.length ? prefix[prefix.length - 1] : 1;
            prefix.push(lastElementOfPrefix * prev);
        }
        // compute suffix except current
        const suffix = new Array(prefix.length).fill(null);
        for (let i = nums.length - 1; i >= 0; i--) {
            const next = nums[i + 1] === undefined ? 1 : nums[i + 1];
            const elementFromSuffix = suffix[i + 1] === undefined ? 1 : suffix[i + 1]; 
            suffix[i] = next * elementFromSuffix;
        }
        // iterate and muliply suffix and prefix
        for (let k = 0; k < nums.length; k++) {
            nums[k] = prefix[k] * suffix[k];
        }
        return nums;
    }
}
