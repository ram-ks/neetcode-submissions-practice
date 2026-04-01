class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const set = new Set();

        let L = 0;
        set.add(nums[L]);

        for (let R = 1; R < nums.length; R++) {
            if (set.has(nums[R])) {
                return true;
            }
            if ((R - L + 1) > k) {
                set.delete(nums[L]);
                L += 1;
            }            
            set.add(nums[R]);
        }

        return false;
    }
}
