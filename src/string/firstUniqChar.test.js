/**
 *  给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。s 只包含小写字母
    输入: s = "leetcode"
    输出: 0

    输入: s = "loveleetcode"
    输出: 2

    输入: s = "aabb"
    输出: -1
 */

function firstUniqChar(str) {
    let tb = Array.from({ length: 26 }).fill(0)
    for (let i = 0; i < str.length; i++) {
        tb[str[i].charCodeAt(0) - 97]++
    }
    for (let i = 0; i < str.length; i++) {
        if (tb[str[i].charCodeAt(0) - 97] === 1) {
            return i
        }
    }
    return -1
}

test('', () => {
    expect(firstUniqChar("leetcode")).toBe(0)
    expect(firstUniqChar("loveleetcode")).toBe(2)
    expect(firstUniqChar("aabb")).toBe(-1)
});