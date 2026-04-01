class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let collection = new Set();
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            if ((right - left) > k) {
                collection.delete(nums[left]);
                console.log('should not come', right - left + 1, left, right, left + 1,  k)
                left = left + 1;
                
            }

            if (collection.has(nums[right])) {
                return true;
            }

            collection.add(nums[right]);
        }

        return false;
    }
}
