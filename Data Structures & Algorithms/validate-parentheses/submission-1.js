class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        var inputArr = s.split("");
        var outputArr = [];
        var map = {
            ')': '(',
            '}': '{',
            ']': '['
        }
        for (let i = 0; i < inputArr.length; i++) {
            let lastElem = outputArr[outputArr.length - 1];
            lastElem = lastElem === undefined ? null : lastElem;
            if (map[inputArr[i]] === lastElem) {
                outputArr.pop();
            } else {
                outputArr.push(inputArr[i]);
            }
        }

        if (outputArr.length > 0) {
            return false
        }
        return true;
    }
}
