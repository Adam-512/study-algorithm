/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
 * 原地修改输入数组、使用 O(1) 的额外空间
 * 输入：s = ["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 * 
 * 输入：s = ["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 */

function reverseString(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        [arr[start++], arr[end--]] = [arr[end], arr[start]]
    }
    return arr
}

test('', () => {
    expect(reverseString(["h", "e", "l", "l", "o"])).toStrictEqual(["o", "l", "l", "e", "h"])
});