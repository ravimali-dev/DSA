
let n = 15;
let n1= n;
let count = 0;
let lastDigit = 0;
let sum = 0;
let isArmstrong = false
let original = n;

if(n == 0) return 0;

while(n>0){
    n = Math.floor(n/10);
    count++  
 
}
while(n1>0){ 
 lastDigit = n1 % 10 
 n1 = Math.floor(n1/10);
 sum +=lastDigit ** count
 

}
if(sum == original){
    isArmstrong = true;
}
console.log(isArmstrong)

