class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let count = 0;
        let total = 0;

        // 1st loop
        for (let i=0; i<k; i++) {
            total += arr[i];
        }

        if (total / k >= threshold) {
            count++;
        }

        for(let j = k; j < arr.length; j++) {
            total -= arr[j - k];
            total += arr[j];

            if (total / k >= threshold) {
                count++;
            }
        }

        return count;
    }
}
