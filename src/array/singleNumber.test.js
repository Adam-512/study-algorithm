/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，
 * 其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 输入: [2,2,1]
 * 输出: 1
 * 输入: [4,1,2,1,2]
 * 输出: 4
*/

function singleNumber(arr) {
  let the = 0
  for (let i = 0; i < arr.length; i++) {
    the ^= arr[i]
  }
  return the
}

test("", () => {
  expect(singleNumber([2, 2, 1])).toBe(1)
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
})