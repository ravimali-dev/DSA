let n1 = 9;
let n2 = 8;
let n = 0;
let  common = 0;
if(n1 < n2){
    n = n1
}else{
    n =  n2
}

for(let i=1; i<=n; i++){
    if(n1%i == 0 && n2%i == 0){
        common = i
    }
}
console.log(common)