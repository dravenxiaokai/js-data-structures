/**
 * 数组浅复制
 */
var nums = []
for (var i = 0; i < 100; i++) {
    nums[i] = i + 1
}
// var samenums = nums

// nums[0] = 400

// console.log(samenums[0])    // 显示400

/**
 * 数组深复制
 */
function copy(arrOld, arrNew) {
    for (var i = 0; i < arrOld.length; i++) {
        arrNew[i] = arrOld[i]
    }
}
var nums = []
for (var i = 0; i < 100; i++) {
    nums[i] = i + 1
}
var samenums = []
copy(nums, samenums)
nums[0] = 400
console.log(samenums[0])    // 显示为1