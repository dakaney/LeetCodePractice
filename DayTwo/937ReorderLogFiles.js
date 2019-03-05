var reorderLogFiles = function(logs) {
    let numberLogs = [];
    let wordLogs = [];
    for (let i = 0; i < logs.length; i++) {
        let currentLog = logs[i].split(' ')
        if (currentLog[currentLog.length - 1] * 0 === 0) {
            numberLogs.push(logs[i])
        } else {
            currentLog.shift();
            wordLogs.push([logs[i], currentLog.join(' ')]);
        }
    }
    wordLogs = wordLogs.sort((a,b) =>{
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });
    wordLogs = wordLogs.map(word => word = word[0])
    return [...wordLogs, ...numberLogs]
};