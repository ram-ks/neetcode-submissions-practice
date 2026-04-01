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
            while (left < right && !this.isWithinAlphabetsAndNums(s[left])) {
                left++;
            }

            while (left < right && !this.isWithinAlphabetsAndNums(s[right])) {
                right--;
            }

            console.log("voila", s[left], s[right]);
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
