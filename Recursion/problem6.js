class Solution {
    palindromeCheck(s, i = 0) {
        let n = s.length;

        // Base case
        if (i >= n - i - 1) {
            return true;
        }

        // Mismatch
        if (s[i] !== s[n - i - 1]) {
            return false;
        }

        // Recursive call
        return this.palindromeCheck(s, i + 1);
    }
}

let obj = new Solution();

console.log(obj.palindromeCheck("hannah")); // true
console.log(obj.palindromeCheck("madam"));  // true
console.log(obj.palindromeCheck("abba"));   // true
console.log(obj.palindromeCheck("hello"));  // false
console.log(obj.palindromeCheck("abc"));    // false