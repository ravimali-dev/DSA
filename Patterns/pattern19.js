let n = 4

let rowValue
let colValue




for (let row = 1 ; row <= n*2-1; row++) {

    if(row <= n){
   rowValue =   n - row + 1
}else{
   rowValue = row - n + 1
}
    let ans = "";

    for (let coloum= 1; coloum <=n*2-1; coloum++) {

       if(coloum <= n){
     colValue = n - coloum + 1
}else{
   colValue = coloum - n + 1
}
ans += Math.max(colValue, rowValue) + " ";

    }

    console.log(ans);
}