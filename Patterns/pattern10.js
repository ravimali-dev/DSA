let n = 5;


for (let i = 0; i < n*2-1; i++) { 
    let row = "";
    if(i<n){
       for(let j=0; j<=i; j++){
        row += "*"
       }
    }else{
       for(let j=0; j<2*n-i-1; j++){
        row += '*'
       }
    }
     console.log(row);
}