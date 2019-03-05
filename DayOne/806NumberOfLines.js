var numberOfLines = function(widths, S) {
    let count = 0;
    let fullLine = 1;
    for (let i = 0; i < S.length; i++) {
        let character = S.charCodeAt(i) - 97;
        count += widths[character];
        if (count > 100) {
            fullLine += 1;
            count = widths[character];
        }
    }
    return [fullLine, count]
};