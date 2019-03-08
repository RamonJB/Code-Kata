// 03/08/19

/*
  5 Kyu
  Problem provided by https://www.codewars.com/kata/where-my-anagrams-at
*/

function anagrams(word, words) {
  let wordMap = new Map();
  let anagramArray = [];

  // Mapping each letter of word and the number of times each letter appears.
  for(let i = 0; i < word.length; i++) {
    if(!wordMap.has(word[i]))
      wordMap.set(word[i], 1);

    else wordMap.set(word[i], wordMap.get(word[i]) + 1);
  }

  // Mapping each letter of each word and the number of times each letter 
  // appears in each word from the words array.
  for(let i = 0; i < words.length; i++) {
    let wordsMap = new Map();
    for(let j = 0; j < words[i].length; j++) {
      if(!wordsMap.has(words[i][j]))
        wordsMap.set(words[i][j], 1);

      else wordsMap.set(words[i][j], wordsMap.get(words[i][j]) + 1);
    }
    
    // Filters out words that don't have the same letters as 'word.'
    if(wordMap.size !== wordsMap.size)
      continue;

    else {
      let temp;
      let equalCount = 0;
      let sortedWordMap = new Map([...wordMap.entries()].sort());
      let sortedWordsMap = new Map([...wordsMap.entries()].sort());
      
      // Checks that each letter has the same count as that of 'word.'
      for(let [key, value] of sortedWordMap) {
        temp = sortedWordsMap.get(key);

        if(temp === sortedWordMap.get(key) && sortedWordsMap.has(key))
          equalCount++;
      }

      if(equalCount == wordMap.size)
        anagramArray.push(words[i]);
    }
  }

  return anagramArray;
}
