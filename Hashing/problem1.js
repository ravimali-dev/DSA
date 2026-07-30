

 let hash = {};
class Solution {
    countFrequencies(nums) {
        // Your code goes here
       
        for(let num of nums){
            hash[num] = (hash[num] || 0) + 1
        }
    }
}

let obj = new Solution();
obj.countFrequencies([2,3,2,4,3,5])
console.log(hash)