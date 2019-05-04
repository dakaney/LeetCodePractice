const twoCitySchedCost = function (costs) {
    let total = 0;
    const costsLength = costs.length / 2;
    costs.sort((a, b) => ((a[0] - a[1]) - (b[0] - b[1])));
    for (let i = 0; i < costsLength; ++i) {
      total += (costs[i][0] + costs[i + costsLength][1]);
    }
    return total;
  };