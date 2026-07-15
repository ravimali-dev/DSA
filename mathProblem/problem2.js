let n = 1;
let count = 0;

if(n == 0) return 0;

while(n>0){
    n = Math.floor(n/10);
    count++  
}
console.log(count)