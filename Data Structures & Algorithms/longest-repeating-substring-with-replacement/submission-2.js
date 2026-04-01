class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = {};
        let left = 0;
        let gMax = 0;

        for (let right = 0; right < s.length; right++) {
            map[s[right]] = 1 + (map[s[right]] ? map[s[right]] : 0);

            while ((right - left + 1) - Math.max(...Object.values(map)) > k) {
                map[s[left]] = map[s[left]] - 1;
                left++;
            }
            gMax = Math.max(gMax, (right - left + 1));
        }

        return gMax;
    }
}
