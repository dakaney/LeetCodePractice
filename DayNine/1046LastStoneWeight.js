var lastStoneWeight = function(stones) {
    if (stones.length === 0) {
        return 0;
    } else if (stones.length === 1) {
        return stones[0];
    } else if (stones.length === 2) {
        return Math.abs(stones[0] - stones[1]);
    }
    let sorted = stones.sort((a,b) => b - a);
    if (sorted[0] !== sorted[1]) sorted.push(sorted[0] - sorted[1])
    return lastStoneWeight(sorted.slice(2))
};