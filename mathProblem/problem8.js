let n = 1;
let isPrime = true
if(n == 1){
     isPrime = false
}
for(let i = 2; i<n; i++){
    if(n % i == 0){
         isPrime = false;
         break;
    }
}
console.log(isPrime)