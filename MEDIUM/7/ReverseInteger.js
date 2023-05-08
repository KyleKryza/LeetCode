/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg = false;
    if(x < 0)
        neg = true
    var numberString = (Math.abs(x)).toString();
    var result = 0;
    for(let i = numberString.length - 1; i >= 0; i--){
        let charNum = numberString.charCodeAt(i) - '0'.charCodeAt(0);
        result += (10 ** i) * (charNum)
    }
    if(neg)
        result *= -1
    if(result < ((-2) ** 31) || result > (2 ** 31 - 1))
        return 0
    return result
};

console.log(reverse(120))