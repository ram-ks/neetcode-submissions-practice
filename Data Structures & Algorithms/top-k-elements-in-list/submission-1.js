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

        console.log(numMap);
        const size = Math.max(...numMap.values());
        const result = Array.from({ length: size + 1}, () => []);
        for (const [key, value] of numMap) {
            result[value].push(key);
        }

        const response = [];

        for (let i = result.length - 1; i > 0 && response.length < k; i--) {
            for (let j of result[i]) {
                response.push(j);
                if (response.length === k) {
                    break;
                }
            } 
        }

        return response;
    }
}
