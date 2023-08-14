/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    for(let i = 0; i < k; i++){
        let max = i;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] > nums[max]){
                max = j;
            }
        }
        let temp = nums[max];
        nums[max] = nums[i];
        nums[i] = temp;
    }
    console.log(nums);
    return nums[k-1];
};

console.log(findKthLargest([3,2,1,5,6,4], 2));