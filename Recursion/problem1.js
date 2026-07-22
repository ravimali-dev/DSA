let count = 1;

// function print(){
//     if(count > 5) return;

//     console.log(count)
//     count++;
//     print()
   
// }
// print()

class solution{
    printNumbers(n){
        if(count > this.n) return;
        console.log(count)
        this.printNumbers(count +1)
    }

}
const obj = new solution();
obj.printNumbers(5)