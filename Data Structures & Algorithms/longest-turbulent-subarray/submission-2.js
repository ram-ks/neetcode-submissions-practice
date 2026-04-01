class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let prev = "";
        let left = 0;
        let right = 1;
        let result = 1;

        while (right < arr.length) {
            if (arr[right] < arr[right - 1] && prev !== "<") {
                result = Math.max(result, right - left + 1); // this is to keep track of maximum sum found till now, if later the max sum is less, it would still keep the max sum. 
                prev = "<";
                right++;
            } else if (arr[right] > arr[right - 1] && prev !== ">") {
                result = Math.max(result, right - left + 1);
                prev = ">";
                right++;
            } else {
                if (arr[right] === arr[right - 1]) {
                    right = right + 1;
                } else {
                    right = right;
                }
                left = right - 1;
                prev = "";
            }
        }

        return result;
    }
}
