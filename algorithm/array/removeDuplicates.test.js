/**
 * 给你一个 升序排列 的数组 nums ，
 * 请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，
 * 返回删除后数组的新长度。
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 5, nums = [0,1,2,3,4]
 */

function removeDuplicates(arr) {
  let index = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[index] != arr[i]) {
      index++
      arr[index] = arr[i]
    }
  }
  arr = arr.slice(0, index + 1)
  console.log(arr)
  return index + 1
}

test('', () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual(5)
})