class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixMap = new Map();
        let sum = 0;
        let count = 0;
        prefixMap.set(0, 1); // for edge case

        for (let num of nums) {
            // S => SUM - K
            sum += num;
            const target = sum - k;            
            if (prefixMap.get(target)) {
                count += prefixMap.get(target);
            }
            prefixMap.set(sum, prefixMap.get(sum) ? prefixMap.get(sum) + 1 : 1);
        }
        return count;
    }
}
