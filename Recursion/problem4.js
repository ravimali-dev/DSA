class Solution {
  factorial(n) {
    if (n <= 1) {
      return 1;
    }

    return n * this.factorial(n - 1);
  }
}
const sol = new Solution();

console.log(sol.factorial(5));
