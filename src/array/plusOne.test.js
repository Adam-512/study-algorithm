/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 */
 function plusOne(digits) {
  var carry = 1; // 我们将初始的 +1 也当做是一个在个位的 carry
  for (var i = digits.length - 1; i > -1; i--) {
    if (carry) {
      var sum = carry + digits[i];
      console.log(sum)
      digits[i] = sum % 10;
      carry = sum > 9 ? 1 : 0; // 每次计算都会更新下一步需要用到的 carry
    }
  }
  console.log(carry)
  if (carry === 1) {
    digits.unshift(1); // 如果carry最后停留在1，说明有需要额外的一个长度 所以我们就在首位增添一个 1
  }
  return digits;
};
test("",()=>{
  expect(plusOne([1,2,3])).toStrictEqual([1,2,4])
  expect(plusOne([4,3,2,1])).toStrictEqual([4,3,2,2])
  expect(plusOne([9,9,9])).toStrictEqual([1,0,0,0])
})