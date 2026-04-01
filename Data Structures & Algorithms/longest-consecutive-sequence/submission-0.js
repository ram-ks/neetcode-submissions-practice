class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * set = {2, 20, 4, 10, 3, 5}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                // this is starting sequence
                let len = 0;

                while (numSet.has(num + len)) {
                    len++;
                }
                longest = Math.max(longest, len);
            }            
        }

        return longest;
    }
}
