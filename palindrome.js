/**
 * @param {number} x
 * @return {boolean}
*/

 var isPalindrome = function(x) {
    let str = String(x)
    let reversedStr = ""
    for(let i=str.length-1; i>=0; i--){
        reversedStr += str[i]
    }
    if(reversedStr === str){
        return true
    }
    return false
    
};
console.log(isPalindrome(121))
