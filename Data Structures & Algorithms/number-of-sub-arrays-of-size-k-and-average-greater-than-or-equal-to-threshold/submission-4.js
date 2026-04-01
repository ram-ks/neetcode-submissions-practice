class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let left = 0;
        let total = 0;
        let target = k * threshold;
        let count = 0;

        for (let right = 0; right < arr.length; right++) {
            total += arr[right];

            if (right - left + 1 === k) {
                if (total >= target) count++;
                total -= arr[left];
                left++;
            }
        }

        return count;
    }
}
