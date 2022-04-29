/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 */

function twoSum(arr, target) {
    let mp = new Map()
    for (let i = 0; i < arr.length; i++) {
        let parter = target - arr[i]
        if (mp.has(parter)) {
            return [mp.get(parter), i]
        }
        mp.set(arr[i], i)
    }
}

test("", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
})