var findTheDifference = function(s, t) {
    let uniqS = {};
    for (let i = 0; i < s.length; i++) {
        uniqS[s[i]] = uniqS[s[i]] + 1 || 1;
    }
    for (let j = 0; j < t.length; j++) {
        if (!uniqS[t[j]]) return t[j];
        uniqS[t[j]] -= 1;
        if (uniqS[t[j]] < 0) return [t[j]];
    }
    return 'no extra letter found'
};