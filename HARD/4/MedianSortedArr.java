class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int len = nums1.length + nums2.length;
        int[] result = new int[len];

        for(int i = 0; i < nums1.length; i++){
            result[i] = nums1[i];
        }
        for(int i = nums1.length; i < len; i++){
            result[i] = nums2[i - nums1.length];
        }

        selection_sort(result);

        if(len % 2 == 0){
            return ((result[len/2] + result[(len/2) - 1]) / 2.0);
        }

        return result[len/2];
    }

    private void selection_sort(int[] arr){
        for(int i = 0; i < arr.length - 1; i++){
            int min = i;
            for(int j = i + 1; j < arr.length; j++){
                if(arr[min] > arr[j]){
                    min = j;
                }
            }
            swap(arr, i, min);
        }
    }

    private void swap(int[] arr, int x, int y){
        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
}