class solution{
    
    printNumbers(n){
        if(n == 0) return;
        console.log(n);
        n = n-1;
        this.printNumbers(n)
    }


}
const obj = new solution();
obj.printNumbers(5)
