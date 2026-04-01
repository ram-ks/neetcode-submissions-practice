class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let frequency = 0;
        let charMap = new Map();
        let result = 0;

        for (let right = 0; right < s.length; right++) {
            charMap.set(s[right], 1 + (charMap.get(s[right]) ?? 0));
            frequency = Math.max(frequency, charMap.get(s[right]));
            while ((right - left + 1) - Math.max(...charMap.values()) > k) {
                // maxLen, frequency, charMap
                charMap.set(s[left], charMap.get(s[left]) - 1);
                left++;
            }
            result = Math.max(result, (right - left + 1));
        }

        return result;
    }
}
