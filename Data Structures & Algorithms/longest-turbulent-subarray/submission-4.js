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
        let current_max = 1;

        while (right < arr.length) {
            if (arr[right] < arr[right - 1] && prev !== "<") {
                current_max++;
                result = Math.max(result, current_max); // this is to keep track of maximum sum found till now, if later the max sum is less, it would still keep the max sum. 
                prev = "<";
                right++;
            } else if (arr[right] > arr[right - 1] && prev !== ">") {
                current_max++;
                result = Math.max(result, current_max);
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
                current_max = 1;
            }
        }

        return result;
    }
}
