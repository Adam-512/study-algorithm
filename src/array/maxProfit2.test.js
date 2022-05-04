/**
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 只能交易一次
 */

function maxProfit(nums) {
  let min = nums[0];
  let profit = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      profit = Math.max(profit, nums[i] - min);
    }
    else{
        min = Math.min(min,nums[i])
    } 
  }
  return profit
}


test('', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5)
});