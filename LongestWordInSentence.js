function findLongestWord(sentence){
    const words = sentence.split(' ');
    let longestWord='';
    for(let word of words){
      if(word.length > longestWord.length){
        longestWord = word;
      }
    }
    return longestWord
  }
  console.log(findLongestWord("I am Raju from Yaragatti village"));
  // Yaragatti
  