class Solution {
    fib(n) {
         if(n <= 1) return n;
      let  secondLast = 0
      let  last = 1
       
        for(let i=2; i<=n; i++){
           let next = secondLast + last;
           secondLast = last;
           last = next 
        }
        return last
    }
}
const obj = new Solution();
console.log(obj.fib(1))