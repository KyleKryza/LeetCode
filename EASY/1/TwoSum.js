/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let list = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if ((target - element) in list) {
            return [list[(target - element)], i];
        }
        list[element] = i;
    }
    return [0, nums.length - 1]; 
};

console.log(twoSum([2,4,7], 6));