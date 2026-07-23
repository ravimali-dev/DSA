class Solution {
    sumOfNaturalNumbers(N) {
        if (N === 1) {
            return 1;
        }
        
        return N + this.sumOfNaturalNumbers(N - 1);
        
    }
}

const obj = new Solution();
console.log(obj.sumOfNaturalNumbers(5));