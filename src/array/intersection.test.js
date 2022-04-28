/**
 * 两个数组之间的交集
 * 示例：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 */

function intersection(arr1, arr2) {
  let st = new Set(arr2)
  return arr1.filter(v => st.has(v))
}

test('', () => {
  let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
  expect(intersection(nums1, nums2)).toStrictEqual([4, 9])
})