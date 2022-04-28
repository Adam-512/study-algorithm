/**
 * 找到只出现一次的元素，或者有序数组中缺失的元素
 * 利用异或运算的特性
 * 1.0 和 任何数字 异或为本身
 * 2.任何数字异或自己为0
 */

/**
 * 一个数字数组元素都出现两次，其中一个出现一次，找到那个数字
 */

function findTheOne(arr) {
  let theone = 0;
  for (let i = 0; i < arr.length; i++) {
    theone ^= arr[i];
  }
  return theone;
}

// (function(){
//   let arr = [4,1,2,1,2]
//   let res =  findTheOne(arr)
//   console.log(res)
// })()



test("test",()=>{
  expect(findTheOne([4,1,2,1,2])).toBe(4)
})