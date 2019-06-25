var numTilePossibilities = function(tiles) {
    let storage = {};
    let count = 0;
    for (let i = 0; i < tiles.length; i++) {
        helper(tiles[i], storage);
    }
    for (let key in storage) {
      count += 1;
    }
    return count;
};

let helper = (letter, storage) => {
  let arr = [];
  for (let key in storage) {
    for (let i = 0; i < key.length; i++) {
      arr.push(key.substring(0,i) + letter + key.substring(i));
    }
    arr.push(key + letter);
  }
  storage[letter] = true;
  for (let i = 0; i < arr.length; i++) {
    storage[arr[i]] = true;
  }
}