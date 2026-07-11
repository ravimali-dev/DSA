let n = 6;
for (let row = 1; row <= n; row++) {
    let ans = "";

    for (let col = 1; col <= n; col++) {

        if ( row == 1 || row == n || col == 1 || col == n) {
            ans += "* ";
        } else {
            ans += "  ";
        }

    }

    console.log(ans);
}