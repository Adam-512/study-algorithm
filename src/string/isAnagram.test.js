/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词
 
    输入: s = "anagram", t = "nagaram"
    输出: true
    输入: s = "rat", t = "car"
    输出: false
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const table = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    table[s.codePointAt(i) - "a".codePointAt(0)]++;
  }
  for (let i = 0; i < t.length; ++i) {
    table[t.codePointAt(i) - "a".codePointAt(0)]--;
    if (table[t.codePointAt(i) - "a".codePointAt(0)] < 0) {
      return false;
    }
  }
  return true;
};

var isAnagram1 = function(s, t) {
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};


test("", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
  expect(isAnagram("rat", "car")).toBe(false);
});
