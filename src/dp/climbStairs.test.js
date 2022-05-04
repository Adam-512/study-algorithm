/**
 * 爬楼梯总共多少种方法
 * n=1  1----1
 * n=2  1+1 2----2
 * n=3  1+1+1 1+2  2+1 ----3
 * n=4  1+1+1+1 1+2+1 2+1+1 1+1+2 2+2---5
 * 设方法数fx,最后可能是1个台阶，或者2个台阶，得出f(x) = f(x-1) + f(x-2)
 */

function climbStairs(n) {
  if (n <= 2) {
    return n;
  }
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
