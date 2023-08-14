/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let current = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            current += nums[i];

            if(current > max){
                max = current;
            }
        }
        else{
            if(current + nums[i] < 0){
                current = 0;
            }
            else{
                current += nums[i];
            }
        }
        if(nums[i] > max){
            max = nums[i];
        }
    }
    return max;
};

console.log(maxSubArray([-2,-1]))