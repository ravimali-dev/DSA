
// function print(){
//     if(count > 5) return;

//     console.log(count)
//     count++;
//     print()
   
// }
// print()
let count = 1;
let sum = 0
class solution{
    printNumbers(n){
        if(count > n) return;
        sum += count
        count++
        this.printNumbers(n)
    }

}
const obj = new solution();
obj.printNumbers(10)
console.log(sum)