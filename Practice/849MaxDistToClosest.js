var maxDistToClosest = function(seats) {
    let maxZero = 0;
    let beginningZero = 0;
    let endingZero = 0;
    let currentMax = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 0) {
            currentMax += 1;
            if (currentMax > maxZero) maxZero = currentMax
        } else {
            currentMax = 0;
        }
        if (i + 1 === currentMax) beginningZero = currentMax;
        if (i === seats.length - 1) endingZero = currentMax;
    }
    return Math.max(endingZero, beginningZero, Math.ceil(maxZero / 2))
};
