class Solution {
    // Function to reverse the array in place
    // The reversal should be done IN-PLACE.
    // Do not return anything from this function.
    reverse(arr, n, i=0) {
        // Your code here
       if(i >= n-i-1) return;

       let temp = arr[i];
       arr[i] = arr[n-i-1];
       arr[n-i-1] = temp;

     this.reverse(arr, n, i+1)
    }
}
let arr = [10, 20, 30, 40, 50]
let obj = new Solution();
obj.reverse(arr,arr.length);
console.log(arr)
