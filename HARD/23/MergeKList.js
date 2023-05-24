/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let result = []

    while(lists.length != 0){
        let min = 0;
        for(let i = 0; i < lists.length; i++){
            if(lists[i][0] < lists[min][0]){
                min = i;
            }
        }
        result.push(lists[min].shift());
        if(lists[min].length == 0){
            lists.splice(min, 1);
        }
    }

    return result
};

let lists = [[1,4,5],[1,3,4],[2,6]]
console.log(mergeKLists(lists))