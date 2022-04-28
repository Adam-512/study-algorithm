/**
 * 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 */

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start++], arr[end--]] = [arr[end], arr[start]]
    }
}
function rotate(arr = [], k) {
    k %= arr.length
    reverse(arr, 0, arr.length - 1)
    reverse(arr, 0, k - 1)
    reverse(arr, k, arr.length - 1)
    return arr
}

test("", () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
})