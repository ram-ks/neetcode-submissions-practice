class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        // iterate till 3. 
        let result = 0;
        let sum = 0;

        for (let initial = 0; initial<k; initial++) {
            sum += arr[initial];
        }

        if ((sum / k) >= threshold) {
            result += 1;
        }

        for (let i = k; i < arr.length; i++) {
            sum -= arr[i - k];
            sum += arr[i];

            if ((sum / k) >= threshold) {
                result += 1;
            }
        }

        return result;
    }
}
