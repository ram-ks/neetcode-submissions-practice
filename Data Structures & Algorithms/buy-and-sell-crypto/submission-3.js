class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minEl = prices[0];
        let gMax = 0;

        for (let right = 1; right < prices.length; right++) {
            if (prices[right] < minEl) {
                minEl = prices[right];
            } else {
                gMax = Math.max(gMax, prices[right] - minEl);
            }
        }

        return gMax;
    }
}
