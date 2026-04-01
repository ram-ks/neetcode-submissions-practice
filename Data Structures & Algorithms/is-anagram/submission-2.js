class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mapS = new Map();
        const mapT = new Map();

        const arrS = Array.from(s);
        const arrt = Array.from(t);

        for (let index in arrS) {
            const val = mapS.get(arrS[index]);
            if (val) {
                mapS.set(arrS[index], val + 1);
            } else {
                mapS.set(arrS[index], 1);
            }
        }

        for (let index in arrt) {
            const val = mapT.get(arrt[index]);
            if (val) {
                mapT.set(arrt[index], val + 1);
            } else {
                mapT.set(arrt[index], 1);
            }
        }

        console.log(mapS, mapT);
        return s.length === t.length && [...mapS.entries()].every(([key, value]) => (mapT.has(key) && mapT.get(key) === value));
    }
}
