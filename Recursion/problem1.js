
class Solution{
    printNumbers(i,n){
        if(i > n) return;

        console.log(i)
        this.printNumbers(i + 1, n)
    }

}
const obj = new Solution();
obj.printNumbers(1, 5)
