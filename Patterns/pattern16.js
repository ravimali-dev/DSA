let n = 4;

for (let i = 1; i <= n; i++) {
    let row = "";

    for(let j=0; j<=n-i-1; j++){
              row += " ";
    }
    for (let j = 0; j < i*2-1; j++) {
        row += String.fromCharCode(65 + j );
    }
    for(let j=0; j<=n-i-1; j++){
              row += " ";
    }

    console.log(row);
}