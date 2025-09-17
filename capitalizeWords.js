function captilizeWords(sentence){
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(captilizeWords("presidio trainig in full stack"));