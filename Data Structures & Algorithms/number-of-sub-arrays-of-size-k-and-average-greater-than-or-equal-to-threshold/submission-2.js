class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        // single loop
        let currentWindow = 0;
        const requiredWindow = threshold * k;
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            currentWindow += arr[i];

            if (i >= k) {
                currentWindow -= arr[i - k];
            }
            
            if (i >= k - 1) {
                if (currentWindow >= requiredWindow) {
                    count++;
                }
            }
        }

        return count;
    }
}
