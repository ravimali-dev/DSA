let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 0; j < n-i+1; j++) {
        row += String.fromCharCode(65 + j );
    }

    console.log(row);
}