/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = new Array(nums.length)
    for(let i = 0; i < nums.length; i++){
        result[i] = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] < nums[i]){
                result[i]++;
            }
        }
    }
    return result;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))