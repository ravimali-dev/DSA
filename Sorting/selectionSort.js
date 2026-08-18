class Solution {
    selectionSort(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            let minIndex = i;

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[minIndex] > nums[j]) {
                    minIndex = j;
                }
            }

            let temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }

        return nums;
    }
}

const solution = new Solution();

let nums = [5, 2, 4, 3, 1];

console.log(solution.selectionSort(nums));