/**
 *  最长公共前缀,如果不存在公共前缀，返回空字符串 ""
    输入：strs = ["flower","flow","flight"]
    输出："fl"
    输入：strs = ["dog","racecar","car"]
    输出：""
 */
function longestCommonPrefix(strs) {
    let pub = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let index = 0
        for (let j = 0; j < strs[i].length; j++) {
            if (pub[j] == strs[i][j]) {
                index++
            }
            else {
                break
            }
        }
        pub = pub.slice(0, index)
    }
    return pub
}

test('', () => {
   expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl')
   expect(longestCommonPrefix(["dog","racecar","car"])).toBe('')
});