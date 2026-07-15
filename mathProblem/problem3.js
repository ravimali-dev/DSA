function reverseNumber(n) {
    let reverse = 0;
        let sign = 1;
        if(n < 0){
            sign = -1;
          n =   Math.abs(n)
        }
    while (n > 0) {
        let lastDigit = n % 10;
        reverse = reverse * 10 + lastDigit;
        n = Math.floor(n / 10);
    }

    return reverse*sign;
}

console.log(reverseNumber(-120)); // 4321