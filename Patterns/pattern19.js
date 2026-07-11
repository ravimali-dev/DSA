let n = 6

let rowValue
let colValue




for (let row = 1 ; row <= n*2-1; row++) {

    if(row <= 5){
   rowValue =   n - row + 1
}else{
   rowValue = row - n + 1
}
    let ans = "";

    for (let coloum= 1; coloum <=n*2-1; coloum++) {

       if(coloum <= 5){
     colValue = n - coloum + 1
}else{
   colValue = coloum - n + 1
}
ans += Math.max(colValue, rowValue) + " ";

    }

    console.log(ans);
}