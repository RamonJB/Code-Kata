// 03/11/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/find-the-most-frequently-occurring-elements-in-arrays
*/

// TODO: Find a more elegant solution to this.
function getMostFrequent(json) {
  let maxOfEachArray = [];

  for(i in json.temperature) {
    // Maps the amount of time each temperature appears.
    let tempMap = new Map();
    
    // Maps the last index of each temperature.
    let lastOccurrence = new Map();

    for(j in json.temperature[i]) {
      if(!tempMap.has(json.temperature[i][j])) {
        tempMap.set(json.temperature[i][j], 1);
        lastOccurrence.set(json.temperature[i][j], j);
      }

      else {
        tempMap.set(json.temperature[i][j], tempMap.get(json.temperature[i][j]) + 1);
        lastOccurrence.set(json.temperature[i][j], j);
      }
    }

    let maxValue = 0, maxKey = 0, k = 0;
    for(let [key, value] of tempMap.entries()) {
      if(k == 0) {
        if(value >= maxValue) {
          maxValue = value;
          maxKey = key;
          maxIndex = lastOccurrence.get(maxKey);
          k++;
        }
      }

      else {
        if(value > maxValue) {
          maxValue = value;
          maxKey = key;
        }

        // Find the value with the greater index and set maxValue to that value
        else if(value == maxValue) {
          if(lastOccurrence.get(key) > lastOccurrence.get(maxKey)) {
            maxValue = value;
            maxKey = key;
          }
        }
      }
    }

    maxOfEachArray.push(maxKey);
  }

  return maxOfEachArray;
}
