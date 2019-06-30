var distributeCandies = function(candies, num_people) {
    let ans = new Array(num_people).fill(0);
    let index = 0;
    let count = 1;
    while (candies > 0) {
        if (candies < count) {
            ans[index] += candies;
            candies = 0;
        } else {
            ans[index] += count;
            candies -= count;
            count++;
        }
        if (index === num_people - 1) index = 0
        else index++;
    }
    return ans;
};