class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        let uniqueSet = new Set();

        for (let right=0; right<s.length; right++) {
            while (uniqueSet.has(s[right])) {
                uniqueSet.delete(s[left]);
                left++;
            }
            uniqueSet.add(s[right]);
            maxLength = Math.max(maxLength, uniqueSet.size)
        }

        return maxLength;
    }
}
