var isAnagram = function(s, t) {
    let charsS = {};
    for (let i = 0; i < s.length; i++) {
        charsS[s[i]] = charsS[s[i]] + 1 || 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!charsS[t[i]]) return false;
        charsS[t[i]] -= 1;
        if (charsS[t[i]] < 0) return false;
    }
    for (let key in charsS) {
        if (charsS[key] !== 0) return false;
    }
    return true;
};