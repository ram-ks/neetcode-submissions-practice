class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numMap = new Map();
        for (let num of nums) {
            if (numMap.has(num)) {
                numMap.set(num, numMap.get(num) + 1);
            } else {
                numMap.set(num, 1);
            }
        }

        const result = Array.from({ length: nums.length + 1}, () => []);
        for (const [key, value] of numMap) {
            result[value].push(key);
        }

        const response = [];

        for (let i = result.length - 1; i > 0; i--) {
            for (let j of result[i]) {
                if (response.length === k) {
                    break;
                }
                response.push(j);
            } 
        }

        return response;
    }
}
