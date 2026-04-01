class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let response = 0;

        for (let right = 1; right < prices.length; right++) {
            if (prices[right] < minPrice) {
                minPrice = prices[right];
            } else {
                response = Math.max(response, prices[right] - minPrice);
            }
        }

        return response;
    }
}
