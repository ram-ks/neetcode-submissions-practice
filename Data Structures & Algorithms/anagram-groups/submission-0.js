class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * {
     *    [111000]: ['act', 'cat']
     *    [000111]: ['pots', 'tops', 'stop']
     *    [010101]: ['hat']
     * }
     */
    groupAnagrams(strs) {
        const anagramMap = new Map();

        for (let str of strs) {
            const keyOfChar = new Array(26).fill(0);
            let key = '';
            for (let c of str) {
                keyOfChar[c.charCodeAt() - 'a'.charCodeAt()] += 1;
                key = keyOfChar.join('#');
            }
            const element = anagramMap.get(key);
            if (element) {
                element.push(str);
            }
            anagramMap.set(key, element ? element : [str]);
        }
        
        return [...anagramMap.values()];
    }
}
