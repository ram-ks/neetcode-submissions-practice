class Solution {
    /**
     * @param {string} s
     * @return {number}
     * pwwkew
     */
    lengthOfLongestSubstring(s) {
        const test = new Set();
        let left = 0;
        let count = 0;
        for (let right =0; right<s.length;right++) {
            while (test.has(s[right])) {
                test.delete(s[left]);
                left++;
            }
            test.add(s[right]);
            count = Math.max(count, right - left + 1);
        }
        return count;
    }
}
