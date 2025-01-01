function isPalindrome(str){
    const normalaizer = str.toLowerCase()
    const reverseStr = normalaizer.split('').reverse().join('')
    if(normalaizer === reverseStr){
        return true
    } else{
        return false
    }
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("121")); // true