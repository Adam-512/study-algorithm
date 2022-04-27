/**
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：7
 * 
 * 输入：prices = [1,2,3,4,5]
 * 输出：4
*/

function maxProfit(arr) {
  let profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      profit += arr[i + 1] - arr[i]
    }
  }
  return profit
}

test("",()=>{
  expect(maxProfit([7,1,5,3,6,4])).toBe(7)
  expect(maxProfit([1,2,3,4,5])).toBe(4)
})