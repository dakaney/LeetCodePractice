var maxProfit = function(prices) {
    let max = 0;
    let lowest = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i]
        } else {
            max = Math.max (max, prices[i] - lowest);
        }
    }
    return max;
};