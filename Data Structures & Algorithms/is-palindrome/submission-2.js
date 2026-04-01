class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * tab a cat
     * 
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!this.isWithinAlphabetsAndNums(s[left])) {
                left++;
            }

            if (!this.isWithinAlphabetsAndNums(s[right])) {
                right--;
            }

            
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isWithinAlphabetsAndNums(char) {
        const result =  
        (char >= 'a' && char <= 'z') || 
        (char >= 'A' && char <= 'Z') || 
        (char >= '0' && char <= '9');

        return result;
    }
}
