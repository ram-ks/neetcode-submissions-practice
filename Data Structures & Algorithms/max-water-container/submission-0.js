class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let result = 0; 

        while (left < right) {
            const width = Math.min(heights[left], heights[right]);
            const height = right - left;

            const area = width * height;

            result = Math.max(area, result);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return result;
    }
}
