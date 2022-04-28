/**
 * 原地修改数组，移动0到数组的末尾
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 */

function moveZero(arr) {
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[index++] = arr[i]
    }
  }
  for (let i = index; i < arr.length; i++) {
    arr[i] = 0
  }
  return arr
}

test('',()=>{
  expect(moveZero([0,1,0,3,12])).toStrictEqual([1,3,12,0,0])
})