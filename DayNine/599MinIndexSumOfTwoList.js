var findRestaurant = function(list1, list2) {
    let lowestIndex = list1.length + list2.length;
    let choice = [];
    let choices1 = {};
    for (let i = 0; i < list1.length; i++) {
        choices1[list1[i]] = i;
    }
    for (let i = 0; i <list2.length; i++) {
      
        if (choices1[list2[i]] + i < lowestIndex) {
          choice = [list2[i]];
          lowestIndex = choices1[list2[i]] + i;
        } else if (choices1[list2[i]] + i === lowestIndex) {
          choice.push(list2[i]);
          lowestIndex = choices1[list2[i]] + i;
        }
    }
    return choice;
};