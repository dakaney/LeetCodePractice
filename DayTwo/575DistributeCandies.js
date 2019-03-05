// var distributeCandies = function(candies) {
//     let uniqueCandies = 0;
//     let candyTypes = {};
//     for (let i = 0; i < candies.length; i++) {
//         if (!candyTypes[candies[i]]) {
//             uniqueCandies += 1;
//             candyTypes[candies[i]] = true;
//         }
//     }
//     return candies.length >= uniqueCandies * 2 ? uniqueCandies : Math.min(candies.length / 2, uniqueCandies);
// };


var distributeCandies = function(candies) {
    let candyTypes = new Set();
    for (let i = 0; i < candies.length; i++) {
        if (candyTypes.size < candies.length / 2) {
            candyTypes.add(candies[i])
        } else {
            break;
        }
    }
    return candyTypes.size;
};