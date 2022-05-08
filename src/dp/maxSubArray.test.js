/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
    输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出：6
    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

function maxSubArray(nums) {
  for(let i =1;i<nums.length;i++){
      if(nums[i-1]>0){
        nums[i]+=nums[i-1]
      }
  }
  return Math.max(...nums)
}

test('', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
});
