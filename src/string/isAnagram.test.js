/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词
 
    输入: s = "anagram", t = "nagaram"
    输出: true
    输入: s = "rat", t = "car"
    输出: false
 */

function isAnagram(s1, s2) {
    let mp = new Map()
    let res = true
    for (let i = 0; i < s1.length; i++) {
        mp.set(s1[i], i)
    }
    for (let i = 0; i < s2.length; i++) {
        if (!mp.has(s2[i])) {
            res = false
            break
        }
    }
    return res;
}

test('', () => {
    expect(isAnagram("anagram","nagaram")).toBe(true)
    expect(isAnagram("rat","car")).toBe(false)
});