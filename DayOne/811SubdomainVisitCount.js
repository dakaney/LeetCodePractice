var subdomainVisits = function(cpdomains) {
    let result = {};
    for (let i = 0; i < cpdomains.length; i++) {
        let currentDomain = cpdomains[i].split(' ');
        let currentNum = Number(currentDomain[0]);
        let currentAddress = currentDomain[1].split('.');
        let curStr = currentAddress[currentAddress.length - 1];
        for (let j = currentAddress.length - 1; j >= 0; j--) {
            result[curStr] = result[curStr] || 0;
            result[curStr] += currentNum;
            curStr = currentAddress[j - 1] + '.' + curStr;
        }
    }
    let ans = [];
    for (let domain in result) {
        ans.push(`${result[domain]} ${domain}`)
    }
    return ans;
};