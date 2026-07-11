let n = 4;
let line = n*2-1

for (let row = 1; row <= line; row++) {
    let ans = "";

    for (let col = 1; col <= line; col++) {

        if ( row == 1 || row == line || col == 1 || col == line) {
            ans += "4 ";
            
        } else {
            ans += "  ";
        }

    }

    console.log(ans);
}