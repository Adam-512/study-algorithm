/**
 *  给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
    输入: "A man, a plan, a canal: Panama"
    输出: true
    解释："amanaplanacanalpanama" 是回文串

    输入: "race a car"
    输出: false
 */


function isPalindrome(str) {
    let s = str.replaceAll(/[^0-9a-zA-Z]/g,"").toLowerCase()
    let s1 = s.split("").reverse().join("")
    return s == s1
}

test('', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    expect(isPalindrome('race a car')).toBe(false)
});