class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const set = new Set();
        let left = 0;

        for (let i =0; i< nums.length; i++) {
            //first shrink
            if (!(i - left <= k)) {
                set.delete(nums[left]);
                left++;
            }

            if(set.has(nums[i])) {
                return true;
            }

            set.add(nums[i]);
        }

        return false;
    }
}
