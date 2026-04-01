class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let result = 0;
        let currentSum = 0;

        for(let i = 0; i < k; i++) {
            currentSum += arr[i];
        }

        if (currentSum >= k * threshold) {
            result++;
        }

        for (let j = k; j < arr.length; j++) {
            currentSum = currentSum - arr[j - k];
            currentSum += arr[j];

            if (currentSum >= k * threshold) {
                result++;
            }
        }

        return result;
    }
}
