function longestWord(sentence){
    return sentence.split(" ").reduce((longest,word)=>word.length > longest.length ? word:longest,"");
}

console.log(longestWord("I am learning Javascript basics"));