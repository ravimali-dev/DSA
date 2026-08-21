let n = 4;

let line = n*2-1;


for(let i=1; i<=line; i++){
    let ans = "";
    let row = (n-i)+1;
    if(row <= 0){
        row = (i-n)+1
    }
    ans += row
    console.log(ans)

}