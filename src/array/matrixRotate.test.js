/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]

 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */

function rotate(arr) {
    let cp = JSON.parse(JSON.stringify(arr))
    let n = arr.length
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][n - j - 1] = cp[j][i]
        }
    }
    console.log(arr)
    return arr
}

test('', () => {
    expect(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]])
});