function reverseNumber(n) {
    let reverse = 0;
    let real = n;
    let isPalindrome = false;
    while (n > 0) {
        let lastDigit = n % 10;
        reverse = reverse * 10 + lastDigit;
        n = Math.floor(n / 10);
    }
    if(real == reverse){
        isPalindrome = true;
    }

    return isPalindrome
}

console.log(reverseNumber(-121)); // 121