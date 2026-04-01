class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            const len = str.length;
            result += `${len}#${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     * 4#neet4#code3#you
     */
    decode(str) {
        let i = 0;
        const result = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') { 
                j++;
            }
            const start = j + 1;
            const len = parseInt(str.slice(i, j));
            const end = start + len;
            const val = str.slice(start, end);
            result.push(val);
            i = end;
        }
        return result;
    }
}
