class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const mapS = {};
        const mapT = {};

        for (let i = 0; i < s.length; i++) {
            mapS[s[i]] = (mapS[s[i]] || 0) + 1;
            mapT[t[i]] = (mapT[t[i]] || 0) + 1;
        }

        for (let index in mapS) {
            if (mapS[index] !== mapT[index]) {
                return false;
            }   
        }

        console.log(mapS, mapT);

        return true;
    }
}
