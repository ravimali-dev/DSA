class Solution {
  factorial(n) {
    if (n == 0) {
      return 1;
    }

    return n * this.factorial(n - 1);
  }
}
const sol = new Solution();

console.log(sol.factorial(4));
