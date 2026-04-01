class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */

    // this is using dynamic programming
    maxTurbulenceSize(arr) {
        let inc = 1;
        let dec = 1;
        let result = 1;

        if (arr.length <= 1) {
            return result;
        }

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                inc = dec + 1;
                dec = 1;
            } else if (arr[i] < arr[i - 1]) {
                dec = inc + 1;
                inc = 1;
            } else {
                inc = 1;
                dec = 1;
            }
            result = Math.max(result, inc, dec);
        }

        return result;
    }
}
