/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums[i] = null;
        }
        else {
            result++;
            let j = i - 1;
            while(j >= 0 && nums[j] == null){
                nums[j] = nums[j + 1];
                nums[j + 1] = null;
                j--;
            }
        }
    }
    return result;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))