/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for(let i = 1; i <= amount; i++){
        for(let c = 0; c < coins.length; c++){
            let coin = coins[c];
            if(i - coin >= 0){
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    if(dp[amount] == amount + 1){
        return -1;
    }
    return dp[amount];
};

console.log(coinChange([1,2,5], 11))