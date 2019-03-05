var calPoints = function(ops) {
    let points = 0;
    let prevRounds = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === 'C') {
            let prevInvalid = prevRounds.pop();
            points -= prevInvalid;
        } else if (ops[i] === 'D') {
            let doublePrev = prevRounds[prevRounds.length - 1] * 2;
            points += doublePrev;
            prevRounds.push(doublePrev)
        } else if (ops[i] === '+') {
            let twoPrev = prevRounds[prevRounds.length - 1] + prevRounds[prevRounds.length - 2];
            points += twoPrev
            prevRounds.push(twoPrev);
        } else {
            let curRound = Number(ops[i]);
            points += curRound;
            prevRounds.push(curRound);
        }
    }
    return points;
};