var lemonadeChange = function(bills) {
    if (bills[0] !== 5) return false;
    let fives = 1;
    let tens = 0;
    for (let i = 1; i < bills.length; i++) {
        if (bills[i] === 20) {
            if (fives >= 1 && tens >= 1) {
                fives--;
                tens--;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return false;
            }
        } else if (bills[i] === 10) {
            tens += 1;
            if (fives >= 1) {
                fives--;
            } else {
                return false;
            }
        } else {
            fives++;
        }
    }
    return true;
};