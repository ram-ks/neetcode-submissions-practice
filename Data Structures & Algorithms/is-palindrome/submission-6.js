class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * tab a cat
     * 
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            // multiple consecutive skips
            while (left < right && !this.isWithinAlphabetsAndNums(s[left])) {
                left++;
            }

            // multiple consecutive skips
            while (left < right && !this.isWithinAlphabetsAndNums(s[right])) {
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
