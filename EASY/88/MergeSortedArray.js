/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let merged = new Array(m + n).fill(0);
    let count = 0;
    let i = 0;
    let j = 0;

    while(i < m || j < n){
        if(i == m){
            merged[count] = nums2[j];
            j++;
            count++;
            continue; // Skip to next iteration of while loop
        }
        if(j == n){
            merged[count] = nums1[i];
            i++;
            count++;
            continue; // Skip to next iteration of while loop
        }
        if(nums1[i] < nums2[j]){
            merged[count] = nums1[i];
            i++;
        }
        else{
            merged[count] = nums2[j];
            j++;
        }
        count++;
    }

    for(let k = 0; k < m + n; k++){
        nums1[k] = merged[k];
    }

    console.log(nums1);
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);