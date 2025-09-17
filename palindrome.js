function isPalindrome(str){
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("markram"));
console.log(isPalindrome("palindrom"));